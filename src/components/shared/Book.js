import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render(){
        const {book, onShelfChange} = this.props;

        return (
            <div className="book">

                <div className="book-top">

                    <div className="book-cover" 
                         style={{ 
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")` 
                         }
                    }></div>
                    
                    <BookshelfChanger 
                        book={book}
                        onShelfChange={onShelfChange}/>

                </div>

                <div className="book-title">{book.title}</div>

                <div className="book-authors">{book.authors}</div>

            </div>
        );
    }

}

export default Book;