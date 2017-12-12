import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookGrid from '../shared/BookGrid';
import PropTypes from 'prop-types';

class BookSearch extends React.Component {

    static propTypes = {
        onShelfChange: PropTypes.func.isRequired,
        shelvedBooks: PropTypes.array.isRequired,
    }

    state = {
        books: [],
        query: ''
    }

    onUserTypedQuery = (e) => {
    
        const query = e.target.value;

        this.setState({
            query
        });

        if(query) {
            BooksAPI.search(query.trim())
                    .then(books => {
                        if(!books.error){
                            const shelvedBooks = this.props.shelvedBooks;

                            const booksWithShelves = books.map(book => {
                                const bookWithShelf = shelvedBooks.find(b => b.id === book.id);

                                book.shelf = bookWithShelf ? bookWithShelf.shelf : 'none';

                                return book;
                            });

                            this.updateBooks(booksWithShelves);
                        }
                    });
        } else {
            this.updateBooks();
        }
        
    }

    updateBooks(books){
        this.setState({
            books: books || []
        })
    }

    clearSearch(){
        this.setState({
            query: ''
        });
        this.updateBooks([]);
    }

    render(){
        const {onShelfChange} = this.props;

        return (
            <div className="search-books">

              <div className="search-books-bar">
                
                <Link className="close-search" to="/">
                
                    Close

                </Link>
                
                <div className="search-books-input-wrapper">
                  
                  <input 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={this.onUserTypedQuery}
                    value={this.state.query}/>
  
                </div>

                <button 
                    className="search-book-clear-btn" 
                    onClick={() => {this.clearSearch([])}}>
                    Clear
                </button>

              </div>

              <div className="search-books-results">
                
                <div className="search-book-results-amount">
                    <label>Showing <em>{this.state.books.length}</em> results.</label>
                </div>               

                <BookGrid 
                    books={this.state.books}
                    onShelfChange={onShelfChange} />

              </div>
              
            </div>
        );
    }

}

export default BookSearch;