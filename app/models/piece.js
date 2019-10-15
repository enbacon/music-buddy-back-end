const mongoose = require('mongoose')

const pieceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  composer: {
    type: String,
    required: true
  },
  memorized: {
    type: Boolean,
    required: true
  },
  piano: {
    type: Boolean,
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

module.exports = mongoose.model('Piece', pieceSchema)
