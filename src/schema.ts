const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

// Hardcoded Data

const customers = [
  { id: "1", name: "john doe", email: "jdoe@gmail.com", age: 12 },
  { id: "2", name: "jane doe", email: "janedoe@gmail.com", age: 13 },
  { id: "3", name: "rob doe", email: "rdoe@gmail.com", age: 15 }
];

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === args.id) {
            return customers[i];
          }
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
