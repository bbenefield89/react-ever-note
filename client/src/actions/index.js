export const NOTE_ITEM_TITLE = 'NOTE_ITEM_TITLE';
export const UPDATE_NOTE_DATA = 'UPDATE_NOTE_DATA';
export const CURRENT_NOTE = 'CURRENT_NOTE';

export function noteItemTitle(text) {
  return {
    type: NOTE_ITEM_TITLE,
    payload: text
  };
}


export function updateNoteData(text) {
  return {
    type: UPDATE_NOTE_DATA,
    payload: text
  };
}

export function currentNote(index) {
  return {
    type: CURRENT_NOTE,
    payload: index
  };
}
