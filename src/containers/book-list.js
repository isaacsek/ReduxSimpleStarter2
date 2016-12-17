import React from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key = {book.title}
          onClick = {() => this.props.selectBook(book)}
          className = "list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever retusn show up as props inside this containers
  return {
    books: state.books
  };
}

// anything from this function will
// end up as props on the booklist container
function mapDispatchToProps(dispatch) { //value we created, second first name
  // Whenever selectBook is called, the result should be
  // passed to all of our reducers this.props.selectBook
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote booklist from a component to a containers// with this new dispatch mode
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
