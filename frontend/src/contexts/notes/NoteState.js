import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    let Initialnotes = [
        {
            "_id": "63b49900482f94681d4ee8c01",
            "userId": "63b48873beb6938c80361b85",
            "title": "My notes",
            "description": "This is my first notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:07:12.070Z",
            "updatedAt": "2023-01-03T21:07:12.070Z",
            "__v": 0
        },
        {
            "_id": "63b49ece2a36be1fc6ea77018",
            "userId": "63b48873beb6938c80361b85",
            "title": "sexy Title Bro",
            "description": "This is my nth notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:31:58.172Z",
            "updatedAt": "2023-01-03T21:34:39.748Z",
            "__v": 0
        },
        {
            "_id": "63b49900482f94681d4eec601",
            "userId": "63b48873beb6938c80361b85",
            "title": "My notes",
            "description": "This is my first notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:07:12.070Z",
            "updatedAt": "2023-01-03T21:07:12.070Z",
            "__v": 0
        },
        {
            "_id": "63b49ece2a36be1fc6ea703318",
            "userId": "63b48873beb6938c80361b85",
            "title": "sexy Title Bro",
            "description": "This is my nth notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:31:58.172Z",
            "updatedAt": "2023-01-03T21:34:39.748Z",
            "__v": 0
        },
        {
            "_id": "63b49900482f94681d4eec32113201",
            "userId": "63b48873beb6938c80361b85",
            "title": "My notes",
            "description": "This is my first notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:07:12.070Z",
            "updatedAt": "2023-01-03T21:07:12.070Z",
            "__v": 0
        },
        {
            "_id": "63b49ece2a36be1fc6ea7021318",
            "userId": "63b48873beb6938c80361b85",
            "title": "sexy Title Bro",
            "description": "This is my nth notes",
            "tag": "general",
            "createdAt": "2023-01-03T21:31:58.172Z",
            "updatedAt": "2023-01-03T21:34:39.748Z",
            "__v": 0
        }
    ]

    const [notes, setnotes] = useState(Initialnotes)
    return (
    <noteContext.Provider value={{notes,setnotes}}>
        {props.children}
    </noteContext.Provider>
    )
}
export default NoteState