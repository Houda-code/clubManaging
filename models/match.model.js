const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema(
  {
    
    codeMatch:{type:String}, 
    daymatch:{type:Date},
    resultatMath:{type:String},
    joueur: [
        {
         nom:{type:String},
         numMaillot:{type:Number},
         role:{type:String},
        },
      ], 
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("match", MatchSchema);