import React from 'react';

import Input from '../containers/Input';
import NoteList from '../containers/NoteList';

const Left = () => {
  return (
    <div className='left'>
      <header>
        <span className='note-list-title'>Notes</span>
      </header>
      
      <Input />
      
      <NoteList />
    </div>
  );
};

export default Left;
