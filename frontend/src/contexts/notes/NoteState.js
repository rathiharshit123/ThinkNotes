import noteContext from "./noteContext";
import { useState } from "react";
import util from '../../utils/utils'
import constants from '../../utils/constants'
const NoteState = (props)=>{

    
    const [notes, setnotes] = useState([])
    const getNotes = async () =>{
        console.log('getNotes,Called')
        let response = await util.get(constants.GET_ALL_NOTES_URL);
        setnotes(response.data.notes);
    }
    
    const addNote = async (title,description,tag)=>{
        let addNoteResponse = await util.post(constants.ADD_NOTE_URL,{title,description,tag});
        let addedNoteDetails = addNoteResponse.data;
        setnotes(notes.concat(addedNoteDetails));
    }
    const deleteNote = async (id)=>{
        await util.delete(constants.DELETE_NOTE_URL+`/${id}`,)
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setnotes(newNotes)
    }
    const editNote = (id,title,description,tag)=>{
        notes.forEach(element => {
            if(element._id===id){
                element.title = title;
                element.description=description;
                element.tag=tag;
            }
        });
    }    

    return (
    <noteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
        {props.children}
    </noteContext.Provider>
    )
}
export default NoteState