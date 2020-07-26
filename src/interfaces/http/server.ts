import express from 'express'
import cors from 'cors'

import makeCallback from './controllers/mainController'
import {
  postUser,
  notFound
} from './controllers'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/v1/users', makeCallback(postUser))
app.use(makeCallback(notFound))

export default app
