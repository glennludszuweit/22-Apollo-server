const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    getUser(id: String!): User!
    getUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    updateUser(id: ID!, name: String!, email: String!, password: String!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
