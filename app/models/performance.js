const mongoose = require('mongoose')

const performanceSchema = new mongoose.Schema({
  performanceDate: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  },
  composer: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Performance', performanceSchema)
