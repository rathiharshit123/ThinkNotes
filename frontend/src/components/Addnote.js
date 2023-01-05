import React from "react";
import { useContext,useState } from "react";
import noteContext from "../contexts/notes/noteContext";
export const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const handleOnClick = (e)=>{
    e.preventDefault();
    addNote(note);
  }

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: ""
  })
  const onChange= (e)=>{
    console.log("hii")
     setNote({...note,[e.target.name]: e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
            onChange={onChange}/>
            <div id="description" className="form-text">
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary my-3" onClick={handleOnClick}>
            Submit
          </button>
        </form>
        <div className="container"></div>
      </div>
    </div>
  );
};
