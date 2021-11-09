const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const SalleSchema = new Schema({

    codeSalle:{type: String,unique:true,index:true},
    nomSalle:{type: String,unique:true},
    localisation: { type: Number },
    equipements: [{ type: mongoose.Schema.Types.ObjectId, ref: "Equipement" }],
   
},
{ timestamps: true }

);

SalleSchema.pre("validate", function (next) {
    if (!this.codeSalle) {
      this.generatesalleCode();
    }
    next();
  });
SalleSchema.methods.generatecodeSalle = function () {
    this.codeSalle = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  };
module.exports = mongoose.model("Salle",SalleSchema);