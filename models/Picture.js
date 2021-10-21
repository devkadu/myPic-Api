const {Schema, model} = require('mongoose');

const pictureSchema = new Schema(
    {
        title: { type: String},
        url: {type: String},
        favorite: {type: Boolean, default: false},
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    },
    {
        timestamps: true,
    },

);

module.exports = model('Picture', pictureSchema);