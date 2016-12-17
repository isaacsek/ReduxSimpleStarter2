export function selectBook(book) {
  console.log("A book has been selected: " + book.title);
  // return an anction, object with type
  return {
    type: "BOOK_SELECTED", //action type
    payload: book //payload info of object
  };
}
