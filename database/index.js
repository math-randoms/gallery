const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
  console.log('Database connection established');
});

let GallerySchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: true
  // },
  // location: {
  //   type: String
  // },
  // title: {
  //   type: String
  // },
  prop_id: Number,
  // urls: {
  //   type: [String]
  // }
  urls: String
});

let Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;
