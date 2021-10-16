const {Schema, model} = require('mongoose');

const pictureSchema = new Schema(
    {
        title: String,
        url: String,
        comments: [{ body: String, date: Date}],
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
    },

);

module.exports = model('Picture', pictureSchema);