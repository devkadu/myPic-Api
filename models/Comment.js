const { Schema, model } = require ('mongoose');

const commentSchema = new Schema({
    body: String,
    maxlenght: 200,
    
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "Picture",
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      {
          timestamps: true,
      }
});
module.exports = model {'Comment', commentSchema};