const { Router } = require("express");
const router = Router();
const {
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/ToDocontroller");
const { saveTodo } = require("../controllers/ToDocontroller");

router.get("/", getTodo);

router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
