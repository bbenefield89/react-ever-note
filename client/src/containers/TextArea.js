import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateNoteData } from '../actions';

class TextArea extends Component {
  handleNoteData = (e) => {
    this.props.updateNoteData(e.target.value);
  }
  
  render() {
    const { noteData, currentNote } = this.props.input;
    
    return (
      <textarea 
        value={noteData[currentNote]}
        onChange={e => this.handleNoteData(e)}
        placeholder={'  Welcome to Notes! Let us be your second brain. Never forget another thing!\n\n  To start, click on the box to your left and name your note. From there you can start typing here on the right and record all of your thoughts.\n\n  If you need more room, go ahead and click the \'☰\' on the left to give yourself some breathing room.'}
      />
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps, { updateNoteData })(TextArea);
