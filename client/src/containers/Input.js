import React, { Component } from 'react';
import { connect } from 'react-redux';

import { noteItemTitle } from '../actions';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  
  handleNoteTitle = e => {
    if (e.key === 'Enter') {
      this.props.noteItemTitle(e.target.value);
      e.target.value = '';
    }
  }
  
  render() {
    return (
      <div>
      <input
        type='text' 
        placeholder='Start taking notes' 
        onKeyDown={e => this.handleNoteTitle(e)} 
      />
      </div>
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps, { noteItemTitle })(Input);
