import React from 'react';

import Input from '../containers/Input';
import NoteList from '../containers/NoteList';

const Left = () => {
  const handleNoteListWidth = () => {
    document.querySelector('.buns').addEventListener('click', () => {
      document.querySelector('.left').classList.toggle('left-small');
    });
  }
  
  return (
    <div className='left'>
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
