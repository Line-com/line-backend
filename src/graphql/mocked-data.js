const users = [
    {
        displayName: 'Artem Trubin',
        userName: 'artemTrubin',
        id: '1',
        readers: ['2', '3'],
        reading: ['2'],
    },
    {
        displayName: 'Ivan Ivanov',
        userName: 'ivanovi',
        id: '2',
        readers: ['1', '3'],
        reading: ['3'],
    },
    {
        displayName: 'Andrey Andreev',
        userName: 'andreya',
        id: '3',
        readers: ['1'],
        reading: ['1', '2'],
    },
];

const posts = [
    {
        id: '1',
        content: 'What a day to be alive!',
        timestamp: 1612999113080,
        author: '1',
    },
    {
        id: '2',
        content: 'Wow, another super post!',
        timestamp: 1612999113081,
        author: '2',
    },
    {
        id: '3',
        content: 'Super-duper post for testing!',
        timestamp: 1612999113082,
        author: '2',
    },
];

module.exports = { users, posts };
