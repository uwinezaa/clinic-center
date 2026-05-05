const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  hospital: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: '/images/default-doctor.jpg'
  }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
