const mongoose = require('mongoose');

// Define the level schema
const levelSchema = new mongoose.Schema({
  url: {
      type: String,
      required: true,
      unique: true
  },
  flag: {
      type: String,
      required: true,
      unique: true
  },
  points: {
      type: Number,
      required: true,
      unique: true
  }
}, {
  collection: 'levels' // Set the collection name directly here
});

const Level = mongoose.model('Level', levelSchema);

// Export the User model
module.exports = Level;