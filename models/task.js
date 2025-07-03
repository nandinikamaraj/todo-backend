// models/Task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

