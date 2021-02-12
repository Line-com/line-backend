const { 
  getUser, 
  getUsers,
  getPost,
  registerUser,
  makeNewPost,
  getPostsForUser,
  getAuthor,
} = require('../common/helpers')

const resolvers = {
  User: {
    readers: (root) => {
      if (!root.readers) return null
      return root.readers.map((userID) => {
        return getUser(userID)
      })
    },
    reading: (root) => {
      if (!root.reading) return null
      return root.reading.map((userID) => {
        return getUser(userID)
      })
    },
    posts: (root) => getPostsForUser(root.id)
  },

  Post: {
    author: (root) => getAuthor(root.author)
  },

  Query: {
    allUsers: () => getUsers(),
    findUser: (root, args) => getUser(args.id),
    findPost: (root, args) => getPost(args.id)
  },

  Mutation: {
    newUser: (root, args) => registerUser(args),
    newPost: (root, args) => makeNewPost(args),
  }
}

module.exports = { resolvers }
