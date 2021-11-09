
const Salle = require("../models/terrain.models");

const getAllTerrain = async (req, res) => {
  try {
    const terrains = await Terrain.find();
    return res.status(200).json({ terrains });
  } catch (err) {
    return res.status(500).json({ err_message: err });
  }
};
const getTerrainById = async (req, res) => {
  const id = req.params.terrainid;
  try {
    const terrain = await Terrain.findById(id);
    return res.json(terrain);
  } catch (err) {
    return res.json(err);
  }
};

const deleteTerrain = async (req, res) => {
  const id = req.params.terrainid;
  try {
    const deletedTerrain = await Terrain.findByIdAndDelete(id);
    return res.json(deletedTerrain);
  } catch (err) {
    return res.json(err);
  }
};
const updateTerrain = async (req, res) => {
  const id = req.params.terrainid;
  const data = req.body;
  try {
    const updatedTerrain = await Terrain.findByIdAndUpdate(id, data, { new: true });
    return res.json(updatedTerrain);
  } catch (err) {
    return res.json(err);
  }
};

module.exports.getAllTerrain = getAllTerrain;
module.exports.getTerrainById = getTerrainById;
module.exports.deleteTerrain = deleteTerrain;
module.exports.updateTerrain = updateTerrain;
