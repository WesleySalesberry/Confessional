import express from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'

import db from '../db';

const app = express();
app.use(json());
dotenv.config();
app.use(cors())

const PORT = 3001 || 4001

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

import confessions from './route/confession'

app.use('/api/v1/confession', confessions)

app.listen(
  PORT, () =>
  console.log(
    `> Server running in development mode on: http://localhost:${PORT}`
  )
)


