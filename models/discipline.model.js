const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DisciplineSchema = new Schema(
  {
    
    discCode: { type: Number ,unique:true,index:true,maxlength:64 },
    libelle: { type: String, maxlength:64 },
    salle:{type:mongoose.Schema.Types.ObjectId,ref:"salle"},
    terrin:{type:mongoose.Schema.Types.ObjectId,ref:"terrin"},
    sceance:{type:mongoose.Schema.Types.ObjectId,ref:"senace"},
  },
  { timestamps: true }
);

DisciplineSchema.pre("validate", function (next) {//next pour passer au cycle suivant 
  if (!this.disCode) {
    this.generatedisCode();
  }
  next();
});

UserSchema.methods.generatedisCode= function () {
  this.disCode = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

module.exports = mongoose.model("discipline", DisciplineSchema);