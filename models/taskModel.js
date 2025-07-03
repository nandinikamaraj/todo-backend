const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  dueDate: Date,
  priority: String,
  ownerId: mongoose.Schema.Types.ObjectId,
  sharedWith: [mongoose.Schema.Types.ObjectId],
});
module.exports = mongoose.model('Task', TaskSchema);
