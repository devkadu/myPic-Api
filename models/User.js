const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {type: String, unique:true, required: true },
        passwordHash: {type: String, required: true },
       // profilePicture: String,
    },
    {
        timestamps: true,
    },
);


module.exports = model('User', userSchema);