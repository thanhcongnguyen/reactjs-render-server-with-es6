import React from 'react';
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';
import Axios from 'axios'


class List extends React.Component{
  constructor(props){
    super(props);
     this.state = {arr: [] };

  }
  
  componentDidMount() {
		 Axios.post('/getdata')
     .then(res =>{
        this.setState({arr:res.data})
        console.log(this.state)
     })
     .catch(function(err){
        console.log("error" + err)
     })
  }
  render(){
    var arrPlus =this.state.arr.map((i)=> <Note key={i}>Bài -{i}</Note>);
    return(
      <div className="main" >
        <NoteForm />
      {arrPlus}
      </div>
    );
  }
}


module.exports = List;
