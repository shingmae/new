const mongoose = require('mongoose');

const PostEntertainmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    photo: {
      type: String,
      require: false,
    },
    desc: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PostEntertainment', PostEntertainmentSchema);
