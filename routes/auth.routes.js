const router = require("express").Router();

const User = require("../models/user.models");
const userController = require("../controllers/user.controllers");

router.get("/", userController.getAllUsers);
router.get("/:userid", userController.getUserById);
router.delete("/:userid", userController.deleteUser);
router.put("/:userid", userController.updateUser);


router.post("/register", async (req, res) => {
    
    try {
      const newUser = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        birthday : req.body.birthday ,
        addresse: req.body.addresse,
        telephone: req.body.telephone,
        sportprincipal: req.body.sportprincipal,
        sport: req.body.sports,
        message : req.body.message,
        
      });
      const savedUser = await newUser.save();

      
      
      return res.status(201).send("user code: "+savedUser.userCode);
    
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err_message: err });
    }
  });

router.post("/login", async (req, res) => {
    try {
      const userExist = await User.findOne({ userCode});
      if (!userExist)
        return res.status(401).json({ err_message: "identifiant incorrecte" });
      return res.status(200).json({ user: userExist });
    } catch (err) {
      return res.status(500).json({ err_message: err });
    }
  });

  module.exports = router;