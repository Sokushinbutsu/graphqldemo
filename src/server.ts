const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
