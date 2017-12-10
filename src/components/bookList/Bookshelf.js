import React from 'react';
import BookGrid from '../shared/BookGrid';
import PropTypes from 'prop-types';

function Bookshelf (props) {

  const {title, books, onShelfChange} = props;

  return (
    <div className="bookshelf">

      <h2 className="bookshelf-title">{title}</h2>

      <div className="bookshelf-books">

        <BookGrid 
          books={books}
          onShelfChange={onShelfChange}/>

      </div>

    </div>
  );

}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Bookshelf;