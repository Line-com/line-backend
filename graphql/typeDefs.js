const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    displayName: String!
    userName: String!
    id: ID!
    readers: [User!]
    reading: [User!]
    posts: [Post!]
  }

  type Post {
    id: ID!
    content: String!
    timestamp: Int!
    author: User!
  }

  type Query {
    allUsers: [User!]
    findUser(id: ID!): User
    findPost(id: ID!): Post
    getTimeLineForUser(id: ID!): [Post!]
  }

  type Mutation {
    newUser(
      userName: String!
      displayName: String!
    ): User

    newPost(
      content: String!
      authorID: String!
    ): Post
  }
`

module.exports = { typeDefs }
