import {gql} from "@apollo/react-hooks";

export const ADD_BOOK_MUTATION = gql`
mutation add_book($input: BookInput) {
    add_book(input: $input){
            id, title, author, description
    }
}`