import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.title);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={onChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick }>Add Note</button>
        </div>
    )
}
