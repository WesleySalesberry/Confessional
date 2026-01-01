import mongoose from 'mongoose'
import { IViews } from '../interfaces/confess.js'


const Schema = mongoose.Schema

const ViewSchema = new Schema<IViews>({
  c_id: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  expireAt: {
    type: Date,
    default: Date.now(),
    index: { expires: 120 }
  }
}, {
  timestamps: true
})

const View = mongoose.model<IViews>('View', ViewSchema)

export default View