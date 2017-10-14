export const NOTE_ITEM_TITLE = 'NOTE_ITEM_TITLE';

export function noteItemTitle(text) {
  return {
    type: NOTE_ITEM_TITLE,
    payload: text
  }
}
