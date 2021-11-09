const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const uniqueValidator = require("mongoose-unique-validator") ;

const UserSchema = new Schema({

    nom: { type: String, maxlength: 64 },
    prenom: { type: String, maxlength: 64 },
    birthday:{type:Date },
    addresse: { type: String },
    telephone : { type: String, unique:true, maxlength: 18 },
    userCode :{type:String,unique:true},
    sportprincipal: { type: String, ref: "Discipline" },
    sport: [{type: [String], ref: "Discipline"}],
    dateInscription :{type: Date}, 
    message : { type: String, maxlength: 64 },
},
{ timestamps: true }
);

UserSchema.plugin(uniqueValidator,{message:"data is not unique"});

UserSchema.pre("validate", function (next) {
  if (!this.userCode) {
    this.generateuserCode();
  }
  next();
});
UserSchema.methods.generateuserCode = function () {
  this.userCode = ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

module.exports = mongoose.model("User", UserSchema);