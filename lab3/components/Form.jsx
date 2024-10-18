import React, {useState} from "react";

export default function Form({addBook}) {

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNewBook((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        addBook(newBook);
        setNewBook({
            title: '',
            author: '',
            category: '',
            description: '',
        });
    }

    return <div className='book-form'>
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Add title" value={newBook.title} required onChange={handleInputChange}/>
            <input name="author" type="text" placeholder="Add author"  value={newBook.author} required onChange={handleInputChange}/>
            <input name="category" type="text" placeholder="Add category"  value={newBook.category} required onChange={handleInputChange}/>
            <input name="description" type="text" placeholder="Add description"  value={newBook.description} required onChange={handleInputChange}/>
            <button type="submit">Add new book</button>
        </form>
    </div>
}