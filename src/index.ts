import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import databaseService from './services/database.service'

const app = express()

app.use(express.json())
databaseService.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3000, () => console.log('Server started on port 3000'))