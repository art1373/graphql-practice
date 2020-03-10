const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schemas/schema");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening on 4000");
});
