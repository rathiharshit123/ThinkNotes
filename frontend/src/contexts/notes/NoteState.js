import noteContext from "./noteContext";
import { useState } from "react";
import util from '../../utils/utils'
import constants from '../../utils/constants'
const NoteState = (props)=>{

    
    const [notes, setnotes] = useState([])
    const getNotes = async () =>{
        let response = await util.get(constants.GET_ALL_NOTES_URL);
        if(response && response.data.notes){
            setnotes(response.data.notes);
        }
    }
    
    const addNote = async (title,description,tag)=>{
        let addNoteResponse = await util.post(constants.ADD_NOTE_URL,{title,description,tag});
        if(addNoteResponse && addNoteResponse.data){
            let addedNoteDetails = addNoteResponse.data;
            setnotes(notes.concat(addedNoteDetails));
        }
    }
    const deleteNote = async (id)=>{
        let deleteNoteresponse = await util.delete(constants.DELETE_NOTE_URL+`/${id}`,)
        if(deleteNoteresponse && deleteNoteresponse.data){
            const newNotes = notes.filter((note)=>{return note._id!==id});
            setnotes(newNotes)
        }
    }
    const editNote = async (id,title,description,tag)=>{
        let editNoteResponse = await util.put(constants.EDIT_NOTE_URL+`/${id}`,{title,description,tag})
        if(editNoteResponse && editNoteResponse.data){
            let newNotes = JSON.parse(JSON.stringify(notes));
            newNotes.forEach(element => {
                if(element._id===id){
                    element.title = editNoteResponse.data.title;
                    element.description=editNoteResponse.data.description;
                    element.tag=editNoteResponse.data.tag;
                }
            });
            setnotes(newNotes);
        }
    }    

    return (
    <noteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
        {props.children}
    </noteContext.Provider>
    )
}
export default NoteState