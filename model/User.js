const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology:true});
const findOrCreate = require('mongoose-findorcreate')
mongoose.set("useCreateIndex", true)
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        // required:true,
        unique:true,
        lowercase:true,
        match:/^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u
        
    },
    password: {
        type: String,
        minlength:5
        
    },
    googleId:{
        type:String
    }  
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
let User = new mongoose.model("User", userSchema);
module.exports  = User;