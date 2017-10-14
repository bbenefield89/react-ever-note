import React, { Component } from 'react';
import { connect } from 'react-redux';

import { noteItemTitle } from '../actions';

class Input extends Component {
  handleNoteTitle = e => {
    if (e.key === 'Enter') {
      this.props.noteItemTitle(e.target.value);
    }
  }
  
  render() {
    return (
      <input
        type='text' 
        placeholder='Note Name' 
        onKeyDown={e => this.handleNoteTitle(e)} 
      />
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps, { noteItemTitle })(Input);
