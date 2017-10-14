import { NOTE_ITEM_TITLE } from '../actions';

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTE_ITEM_TITLE:
      state = [ ...state, action.payload ];
      return state;
    default:
      return state;
  }
}
