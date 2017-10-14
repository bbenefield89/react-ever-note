import { NOTE_ITEM_TITLE } from '../actions';
import { UPDATE_NOTE_DATA } from '../actions';
import  { CURRENT_NOTE } from '../actions';

const initialState = {
  noteTitle: [],
  noteData: [],
  currentNote: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTE_ITEM_TITLE:
      return state = {
        ...state,
        noteTitle: [ ...state.noteTitle, action.payload ],
        noteData: [ ...state.noteData, '' ]
      };
      
    case UPDATE_NOTE_DATA:
      const copyState = Object.assign({}, state);
      copyState.noteData[state.currentNote] = action.payload;
      state = copyState;
      return state;
      
    case CURRENT_NOTE:
      state = {
        ...state,
        currentNote: action.payload
      }
      return state;
      
    default:
      return state;
  }
}
