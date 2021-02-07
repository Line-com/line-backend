const {ApolloServer, gql} = require('apollo-server')

// For testing
const users = [
  {
    displayName: 'Artem Trubin',
    userName: 'yaripey',
    id: 1
  },
  {
    displayName: 'Ivan Ivanov',
    userName: 'ivanovi',
    id: 2
  }
]

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
