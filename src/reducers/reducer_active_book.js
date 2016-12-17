// state arguemtn is not app state, only this reducer is responsible for
// not global state, default state to null when first loads
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED': return action.payload; //always return object
  }
  return state;
}
