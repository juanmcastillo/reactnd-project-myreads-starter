import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

function BookGrid(props) {

    const {books, onShelfChange} = props;

    return (
        <ol className="books-grid">
            {
                books.map(book => (
                    <li key={book.id}>

                        <Book 
                            book={book}
                            onShelfChange={onShelfChange}/>
                            
                    </li>
                ))
            }
        </ol>
    );

}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookGrid;