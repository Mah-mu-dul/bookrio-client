import React, { useEffect, useState } from 'react';

const ManageItems = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    const handleBookDelete = id =>{
        const proceed = window.confirm(`Are you sure to delete ${id} item`)
        if ( proceed){
                    console.log('deleted',id);

        }

    }
    return (
        <div>
            <ul>
                { 
                    <ul>
                        {
                            books.map(book => <li key={book._id}>{book.name}
                                < button onClick={()=> handleBookDelete(book._id)}>x</button></li>)
                        }
                    </ul>
                }
            </ul>
           
            
        </div>
    );
};

export default ManageItems;