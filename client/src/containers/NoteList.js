import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentNote } from '../actions';

class NoteList extends Component {
  handleCurrentNote = index => {
      this.props.currentNote(index);
    }
  
  render() {    
    const { noteTitle } = this.props.input;
    const noteItemsMap = noteTitle.map((note, index) => 
      <li 
        key={index}
        onClick={() => this.handleCurrentNote(index)}
      >
        {note}
      </li>);

    return (
      <div>
        {
          noteTitle.length > 0 ?
            <ul>{noteItemsMap}</ul> : 
            <p>Start taking notes!</p>
        }
      </div>
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps, { currentNote })(NoteList);
