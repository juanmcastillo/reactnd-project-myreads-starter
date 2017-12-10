import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types';

class BookGrid extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render(){
        const {books, onShelfChange} = this.props;

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

}

export default BookGrid;