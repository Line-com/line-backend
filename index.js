const { ApolloServer, gql } = require('apollo-server')
const { users, posts } = require('./mocked-data')

const typeDefs = gql`
  type User {
    displayName: String!
    userName: String!
    id: ID!
  }

  type Query {
    usersCount: Int!
    allUsers: [User!]!
    findUser(userName: String!): User
  }
`

const resolvers = {
  Query: {
    usersCount: () => users.length,
    allUsers: () => users,
    findUser: (root, args) => 
      users.find(user => user.userName === args.userName)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`)
})
