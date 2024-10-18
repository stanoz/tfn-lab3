import React, {useState} from "react";
import Book from "./Book";

export default function BookCatalog({books}) {

    const [selectedCategory, setSelectedCategory] = useState('None')

    const categories = ['None', ...new Set(books.map(book => book.category))];

    const filteredBooks = selectedCategory === 'None' ? books : books.filter(book => book.category === selectedCategory);

    return (
        <div className='book-catalog'>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((category, index) => (
                    <option key={index}
                            value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <ul>
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <Book
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            description={book.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}