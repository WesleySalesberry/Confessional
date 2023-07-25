import express from 'express'
const router = express.Router()

import postLimit from 'express-rate-limit'

const postLimiter = postLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: 'You are doing that too much. Please try again in 5 minutes.'
  }
})

import { allConfessions, createConfession, getConfession } from '../controller/confession'

router.route('/')
  .get(allConfessions)
  .post(postLimiter, createConfession)

router.route('/:id')
  .get(getConfession)


export default router