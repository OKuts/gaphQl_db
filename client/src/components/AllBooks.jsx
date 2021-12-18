import {useQuery } from '@apollo/client';
import {ALL_BOOKS_QUERY} from "../gql/queries/allBooks";

export const AllBooks = ({ onSelect }) => {
    const { data, loading } = useQuery(ALL_BOOKS_QUERY);

    console.log(data)
    return (
        <>
            {loading && <div>Loading...</div>}

            {!loading && data.getAllBooks && (
                <ul>
                    {data.getAllBooks.map(book => (
                        <li key={book.title}>
                            {book.id}: {book.title} ({book.author.firstName} {book.author.lastName}){' '}
                            <button onClick={() => onSelect(book)}>select</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}