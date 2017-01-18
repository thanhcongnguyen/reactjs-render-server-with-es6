import React from 'react';

class NoteForm extends React.Component{
  //good syntax component es6
  constructor(props){
	super(props);
	this.addNote = this.addNote.bind(this);
  }
  addNote(){
      console.log("addnote");
  }
  render(){
    return(
      <div>
        <input type="text" className="noteform" ref="txt" placeholder="Enter your note..." />
        <br></br>
        <button onClick={this.addNote}>Add</button>
      </div>
    );
  }
}


module.exports = NoteForm;
