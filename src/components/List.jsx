import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';

var arr =[1,2,3];

class List extends React.Component{
  constructor(props){
    super(props);
    // this.state = {arr: ["a", "b", "c"] };

  }
  render(){
    var arrPlus =arr.map((i)=> <Note key={i}>Bài -{i}</Note>);
    return(
      <div className="main" >
        <NoteForm />
      {arrPlus}
      </div>
    );
  }
}


module.exports = List;
