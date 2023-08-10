const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "createdOn", updatedAt: "modifiedOn" } }
);

module.exports = mongoose.model("user", user);
