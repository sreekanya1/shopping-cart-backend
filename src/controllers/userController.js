const User = require("../models/user");

const getUserData = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {
  getUserData,
};

// crud functions
