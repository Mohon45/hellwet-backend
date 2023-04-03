const {
  createTodoService,
  getSingleTodoService,
  getAllTodoService,
  updateTodoService,
  deleteSingleTodoService,
} = require("../services/todo.services");
const { httpResponse } = require("../utils/httpResponse");

exports.createTodo = async (req, res) => {
  try {
    const todo = await createTodoService(req.body);

    res
      .status(201)
      .json(httpResponse("success", todo, "todo create successful"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, error.message));
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await getSingleTodoService(id);

    res
      .status(200)
      .json(httpResponse("success", todo, "todo retrieval successful"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, error.message));
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await getAllTodoService();

    res
      .status(200)
      .json(httpResponse("success", todos, "todo retrieval successful"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, error.message));
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await updateTodoService(id, req.body);

    res
      .status(200)
      .json(httpResponse("success", todo, "todo update successful"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, error.message));
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await deleteSingleTodoService(id);

    res
      .status(200)
      .json(httpResponse("success", todo, "todo delete successful"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, error.message));
  }
};
