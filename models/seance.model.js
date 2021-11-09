const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SceanceSchema = new Schema(
  {
    
    discipline:{type:mongoose.Schema.Types.ObjectId,ref:"discipline"}, 
    libelle: { type: String },
    salle:{type:mongoose.Schema.Types.ObjectId,ref:"salle"},
    terrin:{type:mongoose.Schema.Types.ObjectId,ref:"terrin"},
    date:{type:Date},
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("seance", SceanceSchema);