require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const depthLimit = require("graphql-depth-limit");
const {
  simpleEstimator,
  createComplexityRule,
} = require("graphql-query-complexity");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const db = require("./db/db");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const app = express();
app.use(logger("dev")); //logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// security
app.enable("trust proxy");
app.use(helmet());

const PORT = process.env.PORT || 3000;

const queryComplexityRule = createComplexityRule({
  maximumComplexity: 1000,
  variables: {},
  // eslint-disable-next-line no-console
  createError: (max, actual) =>
    new GraphQLError(
      `Query is too complex: ${actual}. Maximum allowed complexity: ${max}`
    ),
  estimators: [
    simpleEstimator({
      defaultComplexity: 1,
    }),
  ],
});

// async function startApolloServer(typeDefs, resolvers) {
//   // app.get("/", (req, res) => {
//   //   res.send("Dummy value");
//   // });

//   // app.get("/merchants", async (req, res) => {
//   //   const merchants = await db.select().from("merchants");
//   //   console.log(`[DEBUG]\t-\tmerchants ==> ${JSON.stringify(merchants)}`);
//   //   res.send({
//   //     status: 200,
//   //     data: merchants,
//   //   });
//   // });

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
  validationRules: [depthLimit(7), queryComplexityRule],
  formatError: (error) => {
    return error;
  },
  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

(async () => {
  try {
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    app.listen(PORT, () => console.log("example server is running on " + PORT));
  } catch (e) {
    // Deal with the fact the chain failed
    console.log("Error occur when try to start the server");
    console.log(JSON.stringify(e));
    process.exit(1);
  }
  // `text` is not available here
})();
