import React, { useState } from "react";

function CreateArea(props) {
  const [Note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevValue =>{
      return{ ...prevValue,
      [name]:value
      }
    })
  }
  function submitNode(event){
    props.addOn(Note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title"  onChange={handleChange}  value={Note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={Note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
