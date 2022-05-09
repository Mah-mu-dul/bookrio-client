import React, { useEffect, useState } from 'react';

const Allitems = () => {

    const [books, setBooks] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/books')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h3>aveilable books : {books.length}</h3>
           <ul>
                {
                    books.map(book =><li key={book._id}>{book.name}</li> )
                }
           </ul>
        </div>
    );
};

export default Allitems;