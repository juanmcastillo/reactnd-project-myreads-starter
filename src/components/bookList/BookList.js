import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as AppConstants from '../../utils/AppConstants';
import ShortId from 'shortid';

function BookList(props) {

    const { books, onShelfChange } = props;

    return (
        <div className="list-books">

            <div className="list-books-title">

            <h1>MyReads</h1>

            </div>

            <div className="list-books-content">
            
            <div>                  
                { 
                    AppConstants.BOOKSHELVES.map((bookShelf, index) => (
                        <Bookshelf 
                            key={ShortId.generate()}
                            title={bookShelf.title}
                            books={books.filter(book => book.shelf === bookShelf.value)}
                            onShelfChange={onShelfChange} />    
                    ))
                }             

            </div>

            </div>

            <div className="open-search">

            <Link 
                className='' 
                to='/search'>
        
                Add a book
                
            </Link>

            </div>

        </div>
        );

}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookList;