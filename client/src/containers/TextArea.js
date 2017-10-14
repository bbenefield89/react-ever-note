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
      <textarea value={noteData[currentNote]} onChange={e => this.handleNoteData(e)} />
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps, { updateNoteData })(TextArea);
