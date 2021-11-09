const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquipesSchema = new Schema(
  {
    
    codeEquipe:{type:Number,unique:true,index:true}, 
    nomEquipe: { type: String },
    acronymeEquipe:{type:String},
    dateCreation:{type:Date},
    couleursCaracteristique:{type:String},
    adherant :[{type:mongoose.Schema.Types.ObjectId,ref:"User"}]
          

  },
  { timestamps: true }
);


EquipesSchema.pre("validate", function (next) {//next pour passer au cycle suivant 
  if (!this.codeEquipe) {
    this.generatecodeEquipe();
  }
  next();
});

UserSchema.methods.generatecodeEquipe = function () {
  this.codeEquipe= ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};
module.exports = mongoose.model("equipe", EquipesSchema);