const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const DisciplineSchema = new Schema({

    discCode: { type: String,unique:true,index:true, maxlength: 64 },
    libelle: { type: String, maxlength: 64 },
    salle: { type: mongoose.Schema.Types.ObjectId, ref: "Salle" },
    terrain: { type: mongoose.Schema.Types.ObjectId, ref: "Terrain" },
    seance: { type: mongoose.Schema.Types.ObjectId, ref: "Seances" },
   
},
{ timestamps: true }
);

DisciplineSchema.pre("validate", function (next) {
    if (!this.disCode) {
      this.generatedisCode();
    }
    next();
  });
  DisciplineSchema.methods.generatedisCode = function () {
    this.disCode = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  };

module.exports = mongoose.model("Discipline",DisciplineSchema);