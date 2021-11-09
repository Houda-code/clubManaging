const User = require("../models/user.models");

const getALLUsers = async (req, res) => {
  try {
    const users = await user.find();
    return res.status(200).json({ users});
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};


const getUserById = async (req, res) => {
    const id = req.params.userId;
    try {
      const user = await User.findById(id);
      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  };


  const deleteUser = async (req, res) => {
    const id = req.params.userId;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      return res.json(deletedUser);
    } catch (err) {
      return res.json(err);
    }
  };
  const updateUser = async (req, res) => {
    const id = req.params.userId;
    const data = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      return res.json(updatedUser);
    } catch (err) {
      return res.json(err);
    }
  };




module.exports.getALLUsers = getALLUsers;
module.exports.getUserById=getUserById;
module.exports.deleteUser=deleteUser;
module.exports.updateUser=updateUser;

