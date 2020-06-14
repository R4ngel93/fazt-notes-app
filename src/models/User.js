/* Require Schemma & model */
const { Schema, model } = require('mongoose');

/* Require bcryptjs */
const bcrypt = require('bcryptjs');

/* Create Schema */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

/* Encypting methods */
UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/* Create model and export */
module.exports = model('User', UserSchema, 'fazt-users');