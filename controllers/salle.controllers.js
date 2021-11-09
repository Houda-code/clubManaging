
const Salle = require("../models/salle.models");

const getAllSalle = async (req, res) => {
  try {
    const salles = await Salle.find();
    return res.status(200).json({ salles });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const getSalleById = async (req, res) => {
  const id = req.params.salleid;
  try {
    const salle = await Salle.findById(id);
    return res.json(salle);
  } catch (err) {
    return res.json(err);
  }
};

const deleteSalle = async (req, res) => {
  const id = req.params.salleid;
  try {
    const deletedSalle = await Salle.findByIdAndDelete(id);
    return res.json(deletedSalle);
  } catch (err) {
    return res.json(err);
  }
};
const updateSalle = async (req, res) => {
  const id = req.params.salleid;
  const data = req.body;
  try {
    const updatedSalle = await Salle.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedSalle);
  } catch (err) {
    return res.json(err);
  }
};

module.exports.getAllSalle = getAllSalle;
module.exports.getSalleById = getSalleById;
module.exports.deleteSalle = deleteSalle;
module.exports.updateSalle = updateSalle;
