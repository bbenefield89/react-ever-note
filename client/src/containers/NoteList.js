import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteList extends Component {
  render() {
    const noteItemsMap = this.props.input.map((note, index) => <li key={index}>{note}</li>);

    return (
      <div>
        {this.props.input.length > 0 ? <ul>{noteItemsMap}</ul> : <p>Start taking notes!</p>}
      </div>
    );
  }
};

function mapStateToProps({ input }) {
  return {
    input
  };
}

export default connect(mapStateToProps)(NoteList);
