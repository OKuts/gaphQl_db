import {useQuery} from "@apollo/client";
import {GET_BOOK} from "../gql/queries/oneBook";
import {useEffect, useState} from "react";

export const Book = ({id}) => {
    const [book, setBook] = useState({})
    const {data, loading} = useQuery(GET_BOOK, {variables: {id}});

    useEffect(() => {
        if (!loading) setBook(data.getBook)
    }, [data, loading])

    return (
        <>
            <p>{book.title}</p>
            <p>{book.description}</p>
            <p>{book.author?.firstName} {book.author?.lastName}</p>
        </>
    )
}