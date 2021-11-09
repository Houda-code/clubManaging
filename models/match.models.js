const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({

    codeMatch : { type: String,unique:true,index:true},
    dayMatch : { type: Date},
    joueur:[{
        nom: {type: String},
        numMaillot: {type: Number},
        role: {type: String},
    }],
   
},
{ timestamps: true }
);

module.exports = mongoose.model("Match",MatchSchema);