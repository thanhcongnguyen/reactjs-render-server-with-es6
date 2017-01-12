import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';


class List extends React.Component{
  render(){
    return(
      <div>
      <div className="main" >
        <NoteForm />
        <Note/>
      </div>
      </div>
    );
  }
}


module.exports = List;
