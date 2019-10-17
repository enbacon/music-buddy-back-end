const mongoose = require('mongoose')

const performanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  pieces: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Piece'
  }],
  intermission: {
    type: Number,
    min: 0,
    max: 30
  },
  length: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Performance', performanceSchema)
