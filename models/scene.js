const mongoose = require('mongoose');

module.exports = (db) => {
    const pictureSchema = new mongoose.Schema({
        name: String,
        url: String,
    },{
        timestamps: true
    });

    const commentSchema = new mongoose.Schema({
        text: String,
        author: String,
    },{
        timestamps: true
    });

  const slideSchema = new mongoose.Schema({
    picture: pictureSchema,
    comments: [commentSchema],
    duration: Number
  }, {
    timestamps: true
  });

  const sceneSchema = new mongoose.Schema({
    name: String,
    slides: [slideSchema],
  }, {
    timestamps: true
  });


  if(db.models.Scene) {
    return db.models.Scene;
  }else {
    return db.model('Scene', sceneSchema);
  }
}
