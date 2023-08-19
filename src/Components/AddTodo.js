import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description is not allowed.");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group p-1">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <div className="form-group p-1">
                    <label htmlFor="desc">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success p-1">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
