import React from 'react';

import Input from '../../containers/Input';
import NoteList from '../../containers/NoteList';

const Left = () => {
  const handleNoteListWidth = () => {
    const noteList = document.querySelector('.left');
    let { style } = noteList;
    
    if (style.width === '40vw') {
      style.width = '23vw';
    } else {
      style.width = '40vw';
    }
  }
  
  return (
    <div className='left' style={{ width: '40vw' }}>
      <header>
        <span className='note-list-title'>Notes</span>
        <span className='buns' onClick={() => handleNoteListWidth()}>☰</span>
      </header>
      
      <Input />
      
      <NoteList />
    </div>
  );
};

export default Left;
