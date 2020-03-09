const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schemas/schema");

const app = express();
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening on 4000");
});
