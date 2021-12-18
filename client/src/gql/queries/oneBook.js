import {gql} from "@apollo/react-hooks";

export const GET_BOOK = gql`
query GetBook($id: ID!) {
    getBook(id: $id) {
        id
        title
        description
        author {
            id
            firstName
            lastName
        }
    }
}
`