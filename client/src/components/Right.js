import React from 'react';

import TextArea from '../containers/TextArea';

const Right = () => {
  return (
    <div className='right'>
      <div>
        <p className='current-note'>NoteName</p>
      </div>
      
      <div className='text-area-div'>
        <TextArea />
      </div>
    </div>
  );
};

export default Right;
