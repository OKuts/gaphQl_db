import './App.css';
import {AllBooks} from "./components/AllBooks";
import {useState} from "react";
import {Book} from "./components/Book";

function App() {
    const [selectedBookId, setSelectedBookId] = useState();

    return (
        <div>
            <AllBooks onSelect={book => setSelectedBookId(book.id)}/>
            {selectedBookId && (
                <div>
                    <Book id={selectedBookId} />
                </div>
            )}
        </div>
    );
}

export default App;
