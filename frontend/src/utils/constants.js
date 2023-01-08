let BASE_URL = "http://localhost:5000"
module.exports = {
    EDIT_NOTE_URL : BASE_URL+ "/api/v1/notes/editNote",
    ADD_NOTE_URL: BASE_URL + "/api/v1/notes/addNote",
    DELETE_NOTE_URL: BASE_URL + "/api/v1/notes/deleteNote",
    GET_ALL_NOTES_URL: BASE_URL + "/api/v1/notes/getAllNotes",
    LOGIN_URL: BASE_URL + "/api/v1/user/login",
    SIGNUP_URL: BASE_URL + "/api/v1/user/signUp"
}