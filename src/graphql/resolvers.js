const { users, posts } = require('./mocked-data.js');
const uuid = require('uuid');

const resolvers = {
    User: {
        readers: (root) => {
            return root.readers.map((userID) => {
                return users.find((user) => {
                    return user.id === userID;
                });
            });
        },
        reading: (root) => {
            return root.reading.map((userID) => {
                return users.find((user) => {
                    user.id === userID;
                });
            });
        },
        posts: (root) => {
            return posts.filter((post) => {
                return post.author === root.id;
            });
        },
    },

    Post: {
        author: (root) => {
            return users.find((user) => {
                return user.id === root.author;
            });
        },
    },

    Query: {
        allUsers: () => {
            return users;
        },

        findUser: (root, args) => {
            return users.find((user) => user.id === args.id);
        },

        findPost: (root, args) => {
            return posts.find((post) => post.id === args.id);
        },
    },

    Mutation: {
        newUser: (root, args) => {
            const user = {
                displayName: args.displayName,
                userName: args.userName,
                readers: [],
                reading: [],
                id: uuid.v4(),
            };
            users.push(user);
            return user;
        },

        newPost: (root, args) => {
            const post = {
                content: args.content,
                author: args.authorID,
                timespamp: Date.now(),
                id: uuid.v4(),
            };

            posts.push(post);
            return post;
        },
    },
};

module.exports = { resolvers };
