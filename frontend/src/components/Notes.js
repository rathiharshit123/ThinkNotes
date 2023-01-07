import React, {useContext,useEffect,useRef} from 'react'
import noteContext from '../contexts/notes/noteContext';
import {NoteItem} from '../components/NoteItem'
import { Addnote } from './Addnote';
export const Notes = () => {
    const context = useContext(noteContext);
    const {notes,getNotes} = context;

    useEffect(() => {
      getNotes();
    },[])
  
    const updateNote = (currentNote)=>{
      console.log("UPDATE NOTE CALLED");
      ref.current.click();
      console.log(ref.current)
    }

    const ref = useRef(null);

  return (
    <>
    <Addnote/>
    <button type="button" className="btn btn-primary " ref={ref} data-bs-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row my-3">
        <h1>Your Notes</h1>{console.log(notes)}
        {notes.map((note)=>{
            return <NoteItem key={note._id} note= {note} updateNote={updateNote}/>
        })}
    </div>
    </>
  )
}
