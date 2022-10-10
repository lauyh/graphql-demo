# Setup
The following subsection will be the step to setup the running environment.

1. Install [Node.JS](https://nodejs.org/en/)
2. Install [PostgreSQL](https://www.postgresql.org/download/)
3. Git clone [this project](https://github.com/lauyh/graphql-demo) in your `Document` folder.
4. Open `pgadmin` and create a database name as `merchants` by openning the *Query Tool* at the **Tools** and run the this query `CREATE DATABASE merchants`.
5. Open the project using [Visual Studio Code (VS Code)](https://code.visualstudio.com/).
6. Copy the `.env.example` file and rename as `.env`. Fill in the username and password for the database and the name of the database in this case will be `merchants`.
7. Open the terminal in the VS Code and run `npm run migrate` and `npm run seed`.
8. To serve the application, run `npm start` then perform the query via postman. The example will be listed in the `graphql-demo.postman_collection.json`.

# Notes
- The date time format for `created_at` is following the postgresql Datetime format which is `DD-MM-YYYY HH:mm:ss`.
- The reason of why I choosing PostgreSQL over MySQL is because it performance.
- Apollo graphql lib is being used is due to it is more production ready and it has many useful feature.
- Knex.JS is more user friendly compare to Sequelize.
- To be implement  in the future, add user auth and protect the graphql resources.
- Adding docker support in the future.
# Reference
1. [PostgreSQL Index Type](https://www.postgresql.org/docs/current/indexes-types.html)
2. [Optimizing Query With Explain - MySQL](https://dev.mysql.com/doc/refman/5.7/en/using-explain.html)
3. [Knex JS CLI Command Cheatsheet](https://devhints.io/knex)
4. [Knex.JS Migration CLI](https://knexjs.org/guide/migrations.html)
5. [Migration & Seedling - KnexJS](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
6. [Modularizing your GraphQL schema code](https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/)
7. [Knex.JS Query Builder](https://knexjs.org/guide/query-builder.html)
8. [Knex.JS Schema Builder](https://knexjs.org/guide/schema-builder.html)
9. [GraphQL Security](https://atheros.ai/blog/graphql-security-in-node-js-project)
10. [Three ways to represent your GraphQL schema](https://www.apollographql.com/blog/backend/schema-design/three-ways-to-represent-your-graphql-schema/)
11. [GraphQL with Apollo Server and Express - GraphQL Series - Part 1](https://cloudnweb.dev/2019/06/graphql-with-apollo-server-and-express-graphql-series-part-1/)
12. [Apollo Server Express Auth](https://github.com/nandymandy1/apollo-server-express-auth)
13. [Express + PG + Docker Tutorial](https://github.com/hidjou/classsed-docker-tutorial/blob/done/docker-compose.yml)