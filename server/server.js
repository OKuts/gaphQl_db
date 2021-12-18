const allBooks = [
    {
        id: '1',
        title: 'Another awesome book',
        description: '123',
        author: {
            id: '1',
            firstName: 'Alex',
            lastName: 'Kislov'
        }
    },
    {
        id: '2',
        title: 'Awesome book',
        description: '123',
        author: {
            id: '1',
            firstName: 'Alex',
            lastName: 'Kislov'
        }
    }
];

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const {readFileSync} = require('fs')

const schemaString = readFileSync('./schema.graphql', {encoding: 'utf-8'})

const schema = buildSchema(schemaString)

// ------------------------------------------------------------------------------
const root = {
    getAllBooks: () => {
        return allBooks;
    },
    getBook: params => {
        return allBooks.find(({ id }) => params.id === id);
    },
    addBook: params => {
        allBooks.push({
            id: allBooks.length + 1,
            ...params.book,
            author: {
                id: '1',
                firstName: 'Alex',
                lastName: 'Kislov'
            }
        });

        return true;
    }
};

// ------------------------------------------------------------------------------
const app = express();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3001);

console.log('Running a GraphQL API server at http://localhost:3001/graphql');