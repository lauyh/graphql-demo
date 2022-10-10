# Setup
The following subsection will be the step to setup the running environment.
## Run without Docker
1. Install [Node.JS](https://nodejs.org/en/)
2. Install [PostgreSQL](https://www.postgresql.org/download/)
3. Git clone [this project](https://github.com/lauyh/graphql-demo) in your `Document` folder

## Run With Docker
1. Navigate to [docker](https://docs.docker.com/) then click on `Download and install` and follow the installation guide.

# Notes
- Initially the data type for `created_at` suppose to be `Datetime`, due to GraphQL is not natively support, hence I convert it to `String` data type.
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