import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNOte] = useState({
        title:"",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setNOte((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNOte({
            title:"",
            content: ""
        })
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
