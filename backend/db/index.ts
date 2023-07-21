import mongoose from 'mongoose'

const MONGO_URI = "mongodb://mongo:27017/confessions"

mongoose.connect(MONGO_URI).catch((evt) => {
  console.error('Connection error', evt.message);
});

const db = mongoose.connection;

export default db