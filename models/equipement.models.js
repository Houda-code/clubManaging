const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EquipementSchema = new Schema({

    codeEquipement:{type: String,unique:true,index:true},
    libelleEquipement:{type: String},
    dateAquisition: { type: Date },
  
},
{ timestamps: true }

);
EquipementSchema.pre("validate", function (next) {
    if (!this.codeEquipement) {
      this.generatecodeEquipement();
    }
    next();
  });
EquipementSchema.methods.generatecodeEquipement = function () {
    this.codeEquipement = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  };

module.exports = mongoose.model("Equipement",EquipementSchema);