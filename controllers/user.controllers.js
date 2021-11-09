const User = require("../models/user.models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users :users });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const getUserById = async (req, res) => {
  const id = req.params.userid;
  try {
    const user = await User.findById(id);
    return res.json(user);
  } catch (err) {
    return res.json(err);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.userid;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return res.json(deletedUser);
  } catch (err) {
    return res.json(err);
  }
};
const updateUser = async (req, res) => {
  const id = req.params.userid;
  const data = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedUser);
  } catch (err) {
    return res.json(err);
  }
};

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;
