const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EquipeSchema = new Schema({

    code: { type: String,unique:true,index:true, maxlength: 64 },
    nom: { type: String, maxlength: 64 },
    acronyme: { type: String, maxlength: 64 },
    dateDeCréation:{type:Date },
    adherants :[{type: mongoose.Schema.Types.ObjectId, ref: "User" }]
   
},
{ timestamps: true }
);

EquipeSchema.pre("validate", function (next) {
    if (!this.Code) {
      this.generateCode();
    }
    next();
  });
EquipeSchema.methods.generateCode = function () {
    this.Code = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  };


module.exports = mongoose.model("Equipe",EquipeSchema);