const router = require("express").Router();

const Salle = require("../models/salle.models");
const salleController = require("../controllers/salle.controllers");

router.get("/", salleController.getAllSalle);
router.get("/:salleid", salleController.getSalleById);
router.delete("/:salleid", salleController.deleteSalle);
router.put("/:salleid", salleController.updateSalle);


router.post("/salle", async (req, res) => {
    
    try {
  
      const newSalle = new Salle({
        codeSalle: req.body.codeSalle,
        nomSalle: req.body.nomSalle,
        localisation : req.body.localisation ,
        equipements: req.body.equipements,
        
      });
      const savedSalle = await newSalle.save();

        return res.status(201).send(savedSalle);
    
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  });


  module.exports = router;