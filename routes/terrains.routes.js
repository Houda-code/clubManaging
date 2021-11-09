const router = require("express").Router();

const Terrain = require("../models/terrain.models");
const terrainController = require("../controllers/terrain.controllers");

router.get("/", terrainController.getAllTerrain);
router.get("/:terrainid", terrainController.getTerrainById);
router.delete("/:terrainid", terrainController.deleteTerrain);
router.put("/:terrainid", terrainController.updateTerrain);


router.post("/terrain", async (req, res) => {
    
    try {
  
      const newTerrain = new Terrain({
        codeTerrain: req.body.codeTerrain,
        nomTerrain: req.body.nomTerrain,
        typeTerrain : req.body.typeTerrain ,
        longueurTerrain: req.body.longueurTerrain,
        largeurTerrain: req.body.largeurTerrain,
        
      });
      const savedTerrain = await newTerrain.save();

        return res.status(201).send(savedTerrain);
    
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  });


  module.exports = router;