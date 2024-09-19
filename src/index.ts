import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import databaseService from './services/database.service'
import usersRouter from './routers/user.router'


const app = express()

app.use(express.json())
databaseService.connect()

app.use('/api/v1', usersRouter)
app.use(defaultErrorHandler)
//handling error
// Handling 404 not found errors
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const error: any = new Error('Not Found')
//   error.status = 404
//   next(error)
// })

// // General error handling middleware
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode: number = error.status || 500
//   res.status(statusCode).json({
//     status: 'error',
//     stack: process.env.NODE_ENV === 'development' ? error.stack : undefined, // Hide stack trace in production mode
//     code: statusCode,
//     message: error.message || 'Internal Server Error'
//   })
// })

app.listen(3030, () => console.log('Server started on port 3030'))
