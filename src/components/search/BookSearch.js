import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookGrid from '../shared/BookGrid';

class BookSearch extends React.Component {

    state = {
        books: []
    }

    onUserTypedQuery = (e) => {
    
        const query = e.target.value.trim();

        if(query) {
            BooksAPI.search(query)
                    .then(books => {
                        if(Array.isArray(books)){
                            this.updateBooks(books)
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

    render(){
        const {onShelfChange} = this.props;

        return (
            <div className="search-books">

              <div className="search-books-bar">
                
                <Link className='close-search' to='/'>
                
                    Close

                </Link>
                
                <div className="search-books-input-wrapper">
                  
                  <input type="text" placeholder="Search by title or author" onChange={this.onUserTypedQuery}/>
  
                </div>

              </div>

              <div className="search-books-results">
                
                <BookGrid 
                    books={this.state.books}
                    onShelfChange={onShelfChange} />

              </div>
              
            </div>
        );
    }

}

export default BookSearch;