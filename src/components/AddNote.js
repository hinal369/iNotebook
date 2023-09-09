import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.title);
        props.showAlert("Note successfully added!", "success")
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h1>Add a Note</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Title" onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={onChange} minLength={5} required />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" onChange={onChange} minLength={5} required />
            </div>
            <button disabled={note.title.length < 5 || note.description.length < 5}  type="button" className="btn btn-primary" onClick={handleClick }>Add Note</button>
        </div>
    )
}
