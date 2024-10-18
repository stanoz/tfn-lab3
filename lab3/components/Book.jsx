import React from "react";

export default function Book({title, author, category, description}) {
    return (
        <div className='book'>
            <ul>
                <li>Title: {title}</li>
                <li>Author: {author}</li>
                <li>Category: {category}</li>
                <li>Description: {description}</li>
            </ul>
        </div>
    );
}