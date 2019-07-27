//person has name, city, state, profileImg, email
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // city: String,
  // state: String,
  // profileImg: String,
  // email: {
  //   type: String,
  //   required: false
  // }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
