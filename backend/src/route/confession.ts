import express from 'express'
const router = express.Router()

import { allConfessions, createConfession, getConfession } from '../controller/confession'

router.route('/')
  .get(allConfessions)
  .post(createConfession)

router.route('/:id')
  .get(getConfession)


export default router