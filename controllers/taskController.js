const Task = require('../models/TaskModel');

const getTasks = async (req, res) => {
  const Tasks = await Task.find();
  res.json(tasks);
};

const addTask = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.json(newTask);
};

const updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
