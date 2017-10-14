import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentNote extends Component {
  render() {
    const { noteTitle, currentNote } = this.props.input;
    
    return (
      <div>
        {
          currentNote === '' ?
          <h3 className='current-note'>Choose a note</h3> :
          <h3 className='current-note'>{noteTitle[currentNote]}</h3>
        }
      </div>
    )
  }
}

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps)(CurrentNote);
