import React from 'react';

import CurrentNote from '../containers/CurrentNote';
import TextArea from '../containers/TextArea';

const Right = () => {
  return (
    <div className='right'>
      <div>
        <CurrentNote />
      </div>
      
      <div className='text-area-div'>
        <TextArea />
      </div>
    </div>
  );
};

export default Right;
