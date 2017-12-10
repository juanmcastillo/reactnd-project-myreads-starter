import React from 'react';
import BookGrid from '../shared/BookGrid';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render(){
    const {title, books, onShelfChange} = this.props;

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

}

export default Bookshelf;