const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SallesSchema = new Schema(
  {
    
    codeSalle:{type:Number,unique:true,index:true}, 
    nomSalle:{ type: String?unique:true },
    localisation:{type:String},
    equipements: [ {type:mongoose.Schema.Types.ObjectId,ref:"equipement"}],
    
  },
  { timestamps: true }
);

SallesSchema.pre("validate", function (next) {//next pour passer au cycle suivant 
  if (!this.codeSalle) {
    this.generatecodeSalle();
  }
  next();
});

UserSchema.methods.generatecodeSalle = function () {
  this.codeSalle = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

module.exports = mongoose.model("salle", SallesSchema);