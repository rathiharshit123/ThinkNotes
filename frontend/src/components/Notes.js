import React, {useContext} from 'react'
import noteContext from '../contexts/notes/noteContext';
import {NoteItem} from '../components/NoteItem'
import { Addnote } from './Addnote';
export const Notes = () => {
    const context = useContext(noteContext);
    const {notes} = context;

  return (
    <>
    <Addnote/>
    <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note)=>{
            return <NoteItem key={note._id} note= {note}/>
        })}
    </div>
    </>
  )
}
