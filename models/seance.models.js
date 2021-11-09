const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const SeanceSchema = new Schema({

    discipline :{type: mongoose.Schema.Types.ObjectId, ref: "Discipline"},
    salle:{type: mongoose.Schema.Types.ObjectId, ref: "Salle"},
    terrain :{type: mongoose.Schema.Types.ObjectId, ref: "Terrain"},
    date:{type:Date}, 
},
{ timestamps: true }
);


module.exports = mongoose.model("Seance",SeanceSchema);