const { Schema, model } = require ('mongoose');

const albumSchema = new Schema(
  {
      title: { type: String},
      description: {type: String, length: 300},
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  },
  {
      timestamps: true,
  },

);

module.exports = model('Album', albumSchema);

