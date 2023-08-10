import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ConfessionSchema = new Schema({
  confession_id: {
    type: String
  },
  category: {
    type: String,
    required: [true, 'Select your category'],
    trim: true,
    lowercase: true
  },
  title: {
    type: String,
    required: [true, 'A title is needed'],
    unique: true,
    trim: true
  },
  body: {
    type: String,
    required: [true, 'Submit the confession'],
    trim: true
  },
  views: {
    type: Number
  },
  expireAt: {
    type: Date,
    default: Date.now(),
    expires: 2592000

  }
}, {
  timestamps: true
})

const Confession = mongoose.model('Confession', ConfessionSchema)

export default Confession