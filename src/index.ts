import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import databaseService from './services/database.service'
import usersRouter from './routers/user.router'
import morgan from 'morgan'
import { createServer } from 'http'

import moment from 'moment-timezone'
const app = express()

// Creating a custom token that handles different types of input safely
morgan.token('date', (req: Request, res: Response, tz: string | number | boolean | undefined) => {
  // Ensure tz is a string using a type guard
  if (typeof tz === 'string') {
    return moment().tz(tz).format()
  } else {
    // Provide a default timezone or handle the undefined case
    return moment().format()
  }
})

// Using the custom token in the morgan setup
app.use(morgan(':date[Asia/Ho_Chi_Minh] :method :url :status :response-time ms - :res[content-length]'))

const httpServer = createServer(app)

app.use(express.json())
databaseService.connect()

app.use('/api/v1', usersRouter)
app.use(defaultErrorHandler)

httpServer.listen(3030, () => console.log('Server started on port 3030'))
