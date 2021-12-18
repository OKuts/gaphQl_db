import {gql} from "@apollo/react-hooks";

export const ALL_BOOKS_QUERY = gql`
query GetAllBooks {
    getAllBooks {
        id
        title
        description
        author {
            id
            firstName
            lastName
        }
    }
}`
