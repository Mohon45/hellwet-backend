const mongoose = require("mongoose");

// schema design
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Provide yor todo list title"],
    },
    description: {
      type: String,
      required: [true, "Please write your description in this todo"],
    },
    status: {
      type: String,
      enum: ["pending", "complete"],
      default: "pending",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
