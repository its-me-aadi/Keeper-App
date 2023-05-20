import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import '../App.css';

function App() {
  const [note,setNote]=useState([{title:"Shree ram",content:"Janki"}]);
  const [newNote,setNewNote]=useState({
    title:"",
    content:""
  })

  function createNote(event){
    const {value,name}=event.target;
    setNewNote(prevValue=>{
      return {
        ...prevValue,
        [name]:value
      }
    });
    console.log(newNote);
  }

  function AddNote(event){
    console.log(note);
    setNote(prevValue=>[...prevValue,{
      title:newNote.title,
      content:newNote.content
    }])
    console.log(note);
    console.log("clicked");
    event.preventDefault();
  }

  function DeleteNote(id){
    console.log(id);
    setNote(prevValue=>{
      return (
        prevValue.filter((value,index)=>{
          return index!==id;
        })
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={createNote} onClick={AddNote} title={newNote.title} value={newNote.content}/>
      {note.map((item,index)=>{
        return (
          <Note key={index} id={index} title={item.title} content={item.content} onClick={DeleteNote}/>
        )  
      })}
      
      <Footer />
    </div>
  );
}

export default App;
