import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
    const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmYTllNjhhNjcwYzlhZWM4MmVlYWNjIn0sImlhdCI6MTY5NDE0NjE1Mn0.d4mmkcb03VtPJIebHy_4p8su-t5mTnl9hjVOC5y7u7Y"
      },
    });
    const data = await response.json()
    setNotes(data)
}
  // Add a Note
  const addNote = async (title, description, tag) => {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmYTllNjhhNjcwYzlhZWM4MmVlYWNjIn0sImlhdCI6MTY5NDE0NjE1Mn0.d4mmkcb03VtPJIebHy_4p8su-t5mTnl9hjVOC5y7u7Y"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json();
      setNotes(notes.concat(json));
  }

  // Edit a Note    
  const editNote = async (id, title, description, tag) => {
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmYTllNjhhNjcwYzlhZWM4MmVlYWNjIn0sImlhdCI6MTY5NDE0NjE1Mn0.d4mmkcb03VtPJIebHy_4p8su-t5mTnl9hjVOC5y7u7Y"
        },
        body: JSON.stringify({title, description, tag})
      });

      let newNotes = JSON.parse(JSON.stringify(notes));

      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description; 
          newNotes[index].tag = tag
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
       
    }
  }

  // Delete a Note
  const deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmYTllNjhhNjcwYzlhZWM4MmVlYWNjIn0sImlhdCI6MTY5NDE0NjE1Mn0.d4mmkcb03VtPJIebHy_4p8su-t5mTnl9hjVOC5y7u7Y"
      },
    });
    const newNotes = notes.filter((note) => { return note._id !== id})
    setNotes(newNotes);
  }

  return (
      <noteContext.Provider value={{notes, getNotes, addNote, deleteNote, editNote}}>
          {props.children}
      </noteContext.Provider>
  )
}

export default NoteState; 