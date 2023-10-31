const TodoModel = require("../models/TodoSchema");

module.exports.getTodo = async (req, res) => {
  const toDo = await TodoModel.find();
  res.send(toDo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  TodoModel.create({ text })
    .then((data) => {
      console.log("added successfuly");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  console.log(_id, "updateid");
  TodoModel.findByIdAndUpdate(_id, { text })
    .then((data) => res.send("updated successfully"))
    .catch((err) => console.log(err));
};
module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  console.log({ _id });
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully"))
    .catch((err) => console.log(err));
};
