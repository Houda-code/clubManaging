const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const TerrainSchema = new Schema({

    codeTerrain:{type: String,unique:true,index:true},
    nomTerrain:{type: String,unique:true},
    typeTerrain: { type: String},
    longueurTerrain: { type: Number },
    largeurTerrain: { type: Number},
},
{ timestamps: true }

);

TerrainSchema.pre("validate", function (next) {
    if (!this.codeTerrain) {
      this.generatecodeTerrain();
    }
    next();
  });
TerrainSchema.methods.generatecodeTerrain = function () {
    this.codeTerrain = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  };

module.exports = mongoose.model("Terrain",TerrainSchema);