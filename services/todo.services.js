const Todo = require("../models/Todo");

exports.createTodoService = async (todoInfo) => {
  const todo = await Todo.create(todoInfo);
  return todo;
};

exports.getSingleTodoService = async (id) => {
  const todo = await Todo.findOne({ _id: id });
  return todo;
};

exports.getAllTodoService = async () => {
  const todos = await Todo.find({});
  return todos;
};

exports.updateTodoService = async (id, data) => {
  const result = await Todo.updateOne({ _id: id }, data, {
    runValidators: true,
  });

  return result;
};

exports.deleteSingleTodoService = async (id) => {
  const result = await Todo.deleteOne({ _id: id });
  return result;
};
