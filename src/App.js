import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BookSearch from './components/search/BookSearch';
import Library from './components/library/Library';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
            .then(books => this.setState({
                books
            }));
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
            .then(response => {
              book.shelf = newShelf;

              const updatedBooks = this.state.books.filter(b => b.id !== book.id);

              updatedBooks.push(book);

              this.setState({
                books: updatedBooks
              });
            });
  }

  render() {
    return (
      <div className="app"> 

        <Route exact path='/' render={() => (
          <Library 
            books={this.state.books}
            onShelfChange={this.onShelfChange} />
        )}/> 
        
        <Route exact path='/search' render={() => (
          <BookSearch 
            onShelfChange={this.onShelfChange} />
        )}/>
        
      </div>
    );
  }

}

export default BooksApp;
