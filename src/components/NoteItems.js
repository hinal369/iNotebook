import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export default function NoteItems(props) {
    const { note, updateNote } = props  
    const {deleteNote} = useContext(noteContext);

    return (
      <div className="col-md-3 mt-3">
        <div className="card" >
          <div className="card-body">
            <div className="d-flex">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa fa-trash-o mx-2" style={{color: "red"}} onClick={()=>{deleteNote(note._id)}}></i>
              <i className="fa fa-edit mx-2" style={{color: "#3258aa"}} onClick={() => { updateNote(note) }}></i>
            </div>
            <p className="card-text">{note.description}</p>        
          </div>
        </div>
      </div>
      
    )
}
