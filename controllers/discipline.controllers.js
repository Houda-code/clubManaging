
const Discipline = require("../../models/discipline.models");

const getAllDiscipline = async (req, res) => {
  try {
    const disciplines = await Discipline.find();
    return res.status(200).json({ disciplines });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const getDisciplineById = async (req, res) => {
  const id = req.params.disciplineid;
  try {
    const discipline = await User.findById(id);
    return res.json(discipline);
  } catch (err) {
    return res.json(err);
  }
};

const deleteDiscipline = async (req, res) => {
  const id = req.params.disciplineid;
  try {
    const deletedDiscipline = await Discipline.findByIdAndDelete(id);
    return res.json(deletedDiscipline);
  } catch (err) {
    return res.json(err);
  }
};
const updateDiscipline = async (req, res) => {
  const id = req.params.Disciplineid;
  const data = req.body;
  try {
    const updatedDiscipline = await Discipline.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedDiscipline);
  } catch (err) {
    return res.json(err);
  }
};

module.exports.getAllDiscipline = getAllDiscipline;
module.exports.getDisciplineById = getDisciplineById;
module.exports.deleteDiscipline = deleteDiscipline;
module.exports.updateDiscipline = updateDiscipline;
