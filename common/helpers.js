const { users, posts } = require('../mocked-data.js')

export function getUser(id) {
  const user = users.find(user => user.id === ID)
  if (!user) return null
  return user
}

