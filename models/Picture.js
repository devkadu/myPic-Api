const {Schema, model} = require('mongoose');

const pictureSchema = new Schema(
    {
        title: { type: String},
        url: {type: String},
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    },
    {
        timestamps: true,
    },

);

module.exports = model('Picture', pictureSchema);