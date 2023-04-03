const { Router } = require("express");
const router = Router();

const todoController = require("../controllers/todo.controller");

router.post("/create", todoController.createTodo);
router.get("/:id", todoController.getSingleTodo);
router.get("/", todoController.getAllTodos);
router.put("/update/:id", todoController.updateTodo);
router.post("/delete/:id", todoController.deleteTodo);

module.exports = router;
