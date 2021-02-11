const { users } = require('../graphql/mocked-data.js')

function checkUserName(userName) {
  if (users.find(user => user.userName === userName)) {
    return false
  }
  return true
}

module.exports = {checkUserName}
