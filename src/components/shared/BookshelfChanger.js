import React from 'react';
import PropTypes from 'prop-types';

function BookshelfChange(props){

    const { book, onShelfChange } = props;

    return (
        <div className="book-shelf-changer">

            <select 
                value={book.shelf || 'none'}
                onChange={(e) => onShelfChange(book, e.target.value)}>

                <option value="none" disabled>Move to...</option>

                <option value="currentlyReading">Currently Reading</option>

                <option value="wantToRead">Want to Read</option>

                <option value="read">Read</option>

                <option value="none">None</option>

            </select>

        </div>
    );

}

BookshelfChange.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookshelfChange;