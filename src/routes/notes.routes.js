/* Require express.Router */
const { Router } = require('express');

/* Executes Router */
const router = Router();

/* Import notes controller */
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller');

/* Import Authenticated method */
const { isAuthenticated } = require('../middlewares/validateUser');

/* Routes */
//New note
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/add', isAuthenticated, createNewNote);

//Get all notes
router.get('/notes', isAuthenticated, renderNotes);

//Edit note
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNote);

//Delete note
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

/* Export router */
module.exports = router;