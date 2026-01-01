import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';

import db from './db/index.js';
import confessions from './route/confession.js';

/* ------------------------ */
/* Environment & App Setup */
/* ------------------------ */

dotenv.config();

const app = express();

/* ------------------------ */
/* Database */
/* ------------------------ */

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* ------------------------ */
/* Express Settings */
/* ------------------------ */

app.set('trust proxy', true);

app.use(express.json({ limit: '1kb' }));
app.use(express.urlencoded({ extended: true }));

/* ------------------------ */
/* Security Middleware */
/* ------------------------ */

app.use(helmet());
app.use(hpp());

app.use(
  mongoSanitize({
    replaceWith: '_',
  })
);

/* ------------------------ */
/* CORS */
/* ------------------------ */

app.use(
  cors({
    methods: ['GET', 'POST'],
  })
);

/* ------------------------ */
/* Logging */
/* ------------------------ */

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
} else {
  app.use(morgan('combined'));
}

/* ------------------------ */
/* Routes */
/* ------------------------ */

app.use('/api/v1/confession', confessions);

/* ------------------------ */
/* Error Handling */
/* ------------------------ */

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

/* ------------------------ */
/* Server */
/* ------------------------ */

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(
    `> Server running in ${process.env.NODE_ENV ?? 'development'} mode on http://localhost:${PORT}`
  );
});