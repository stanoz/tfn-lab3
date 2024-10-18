import React, {useState} from "react";
import BookCatalog from "../components/BookCatalog";
import DUMMY_BOOKS from "../data/books";
import Form from "../components/Form";

export default function App() {
    const [books, setBooks] = useState(DUMMY_BOOKS);

    const addBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    return <>
        <BookCatalog books={books}/>
        <Form addBook={addBook} />
    </>;
}