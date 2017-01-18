import React from 'react';


class Note extends React.Component{
  deleteNote(){
    console.log("xoa note");
  }
  render(){
    return(
      <div className="note">
        <h3>abcd</h3>
        <button onClick={this.deleteNote}>Xóa</button>
      </div>
    )
  }
}


module.exports = Note;
