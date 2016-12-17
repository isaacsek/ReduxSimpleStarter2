import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({ //global state keys
  books: BooksReducer, //state of app
  activeBook: ActiveBook
});

export default rootReducer;
