import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes(prevValue=>{
      return [...prevValue,newNote];
    })
  }
  function deleteNote(id){
    setNotes(prevValue=>{
      return prevValue.filter((noteItem,index)=>{
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea 
        addOn={addNote}
      />
      {Notes.map((noteItem,index)=>{
        return (<Note key={index} id={index} deleteOn={deleteNote} title={noteItem.title} content={noteItem.content} />)
      })}
      <Footer />
    </div>
  );
}

export default App;
