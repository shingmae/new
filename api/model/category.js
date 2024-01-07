const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
