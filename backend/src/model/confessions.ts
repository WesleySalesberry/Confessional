import mongoose from 'mongoose'
import slugify from 'slugify'

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
  slug: {
    type: String
  },
  views: {
    type: Number
  }
}, {
  timestamps: true
})

ConfessionSchema.pre('save', function (next) {
  this.slug = slugify(`${this.title}, ${this.confession_id}`, {
    lower: true,
    replacement: '-',
    remove: undefined,
    trim: true
  })

  next()
})

const Confession = mongoose.model('Confession', ConfessionSchema)

export default Confession