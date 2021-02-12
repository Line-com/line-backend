const { users, posts } = require('../mocked-data.js')
const uuid = require('uuid')

function getUser(id) {
  const user = users.find(user => user.id === id)
  if (!user) return null
  return user
}

function getPost(id) {
  const post = posts.find(post => post.id === id)
  if (!post) return null
  return post
}

function getUsers() {
  return users
}

function registerUser(args) {
  const newUser = {
    displayName: args.displayName,
    userName: args.userName,
    readers: null,
    reading: null,
    id: uuid.v4()
  }
  return addNewUser(newUser)
}

function addNewUser(user) {
  users.push(user)
  return user
}

function makeNewPost(args) {
  const newPost = {
    content: args.content,
    author: args.authorID,
    timestamp: Date.now(),
    id: uuid.v4(),
  }

  return addNewPost(newPost)
}

function addNewPost(post) {
  posts.push(post)
  return post
}

function getPostsForUser(userID) {
  const postsForUser = posts.filter(post => post.author === userID)
  if (!postsForUser.length) return null
  return postsForUser
}

function getAuthor(userID) {
  return users.find(user => user.id === userID)
}

function getReadingPosts(user) {
  return posts.filter(post => user.reading.includes(post.author))
}

function getTimeLine(userID) {
  const user = getUser(userID)
  if (!user) return null
  const readingPosts = getReadingPosts(user)
  if (!readingPosts.length) return null
  return chronologizePosts(readingPosts)
}

function chronologizePosts(posts) {
  return posts.sort(({timestamp: timeA}, {timestamp: timeB}) => timeB - timeA)
}

module.exports = {
  getUser,
  getUsers,
  getPost,
  registerUser,
  makeNewPost,
  getPostsForUser,
  getAuthor,
  getTimeLine
}
