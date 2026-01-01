import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

await mongoose.connect(process.env.MONGO_URI as string);

export default mongoose.connection;
