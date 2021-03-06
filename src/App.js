import './App.css';
import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route, Switch } from 'react-router-dom';
import BookList from './components/bookList/BookList';
import BookSearch from './components/search/BookSearch';
import NotFound from './components/shared/NotFound';

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

              this.setState({
                books: this.state.books.filter(b => b.id !== book.id)
                                       .concat([book])
              });
            });
  }

  getShelvedBooks(){
    return this.state.books;
  }

  render() {
    return (
      <div className="app"> 

        <Switch>
          <Route exact path='/' render={() => (
            <BookList 
              books={this.state.books}
              onShelfChange={this.onShelfChange} />
          )}/> 
          
          <Route exact path='/search' render={() => (
            <BookSearch 
              shelvedBooks={this.state.books}
              onShelfChange={this.onShelfChange} />
          )}/>

          <Route 
            component={NotFound}/>
        </Switch>
        
      </div>
    );
  }

}

export default BooksApp;
