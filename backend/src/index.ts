import express from 'express';
import { json, urlencoded } from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from "morgan"

import helmet from "helmet";
import hpp from 'hpp'
import mongoSanitize from 'express-mongo-sanitize'

import db from '../db';

const app = express();
app.use(morgan('tiny'))
app.use(json());
app.use(urlencoded({ extended: true, limit: '1kb' }));
dotenv.config();
app.use(hpp());
app.use(helmet());

var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST']
}

app.use(cors(corsOptions));

app.use(
  mongoSanitize({
    replaceWith: '_',
  }),
);

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


