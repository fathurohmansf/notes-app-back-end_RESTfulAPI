const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByHandler,
  editNoteByHandler,
  deleteNoteByIdHandler,
} = require("./handler")

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,getNoteByHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/notes{id}',
  //   handler: getNoteByHandler,
  // },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
]
module.exports = routes