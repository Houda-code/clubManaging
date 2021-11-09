const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TerrainsSchema = new Schema(
  {
    
    codeTerrain:{type:String,unique:true,index:true}, 
    nomTerrain:{ type: String,unique:true },
    typeTerrain:{type:String},
    longueuerTerrain:{type: Number},
    largeurTerrain:{type:Number},
  },
  { timestamps: true }
);

TerrainsSchema.pre("validate", function (next) {//next pour passer au cycle suivant 
  if (!this.codeTerrain) {
    this.generatecodeTerrain();
  }
  next();
});

TerrainsSchema.methods.generatecodeTerrain = function () {
  this.codeTerrain= ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};



module.exports = mongoose.model("terrain", TerrainsSchema);