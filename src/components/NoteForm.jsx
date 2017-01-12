import React from 'react';

class NoteForm extends React.Component{
  render(){
    return(
      <div>
        <input type="text" className="noteform" ref="txt" placeholder="Enter your note..." />
        <br></br>
        <button>Add</button>
      </div>
    );
  }
}


module.exports = NoteForm;
