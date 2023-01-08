import React, {useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../contexts/notes/noteContext';
import {NoteItem} from '../components/NoteItem'
import { Addnote } from './Addnote';
export const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context;

    useEffect(() => {
      getNotes();
    },[])
  
    const [note, setNote] = useState({
      etitle: "",
      edescription: "",
      etag: "",
      id: ""
    })

    const updateNote = (currentNote)=>{
      ref.current.click();
      setNote({
        etitle: currentNote.title,
        edescription: currentNote.description,
        etag: currentNote.tag,
        id: currentNote._id
      });
    }

    const ref = useRef(null);
    const refClose = useRef(null);

    const onChange= (e)=>{
      setNote({...note,[e.target.name]: e.target.value})
   }

   const handleOnClick = (e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    props.showAlert('Note Updated Successfully','success')
    refClose.current.click();
  }

  return (
    <>
    <Addnote showAlert={props.showAlert}/>
    <div className="container">
      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="my-3">
              <div className="mb-3">
                <label htmlFor="title" className="form-label"> Title </label>
                <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} required minLength={5} aria-describedby="emailHelp" onChange={onChange}/>
                <div id="description" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label"> Description </label>
                <input  type="text" className="form-control" id="edescription" name="edescription" minLength={5} required value={note.edescription} onChange={onChange} />
              </div>
              <div className="mb-3">
              <label htmlFor="tag" className="form-label"> Tag </label>
                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleOnClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-3">
          {notes.length===0 && 'Add a note to display it here'}
        </div>
        {notes.map((note)=>{
            return <NoteItem showAlert={props.showAlert} key={note._id} note= {note} updateNote={updateNote}/>
        })}
    </div>
    </>
  )
}
