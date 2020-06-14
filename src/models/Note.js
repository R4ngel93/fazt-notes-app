/* Require Schemma & model */
const { Schema, model } = require('mongoose');

/* Create Schema */
const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

/* Create model and export */
module.exports = model('Note', NoteSchema, 'fazt-notes');

