const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipementsSchema = new Schema(
  {
    
    codeEquipement: {type:Number,unique:true,index:true}, 
    libelleEquipement: { type: String },
    dateAquisition:{type:Date},
    
  },
  { timestamps: true }
);

EquipementsSchema.pre("validate", function (next) {//next pour passer au cycle suivant 
  if (!this.codeEquipement) {
    this.generatecodeEquipement();
  }
  next();
});
EquipementsSchema.methods.generatecodeEquipement = function () {
  this.codeEquipement= ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};


module.exports = mongoose.model("equipement", EquipementsSchema);