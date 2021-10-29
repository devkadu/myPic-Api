const {Schema, model} = require('mongoose');

const pictureSchema = new Schema(
    {
        title: { type: String},
        url: {type: String},
        favorite: {type: Boolean, default: false},
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
        comment: [{type: Schema.Types.ObjectId, ref:'Comment'}],
    },
    {
        timestamps: true,
    },

);

module.exports = model('Picture', pictureSchema);