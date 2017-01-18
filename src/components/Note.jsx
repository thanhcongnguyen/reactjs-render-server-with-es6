import React from 'react';


class Note extends React.Component{
	//good syntax component es6
  constructor(props){
	super(props);
	this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote(){
    console.log("xoa note");
  }
  render(){
    return(
      <div className="note">
        <h3>{this.props.children}</h3>
        <button onClick={this.deleteNote}>Xóa</button>
      </div>
    )
  }
}


module.exports = Note;
