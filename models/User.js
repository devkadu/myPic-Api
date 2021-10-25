const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {type: String, unique:true, required: true },
        passwordHash: {type: String, required: true },
        profilePicture: {type: String},
        pictures: [{type: Schema.Types.ObjectId, ref:'Picture'}],
        
    },
    {
        timestamps: true,
    },
);


module.exports = model('User', userSchema);