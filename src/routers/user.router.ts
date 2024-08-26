import { Router } from 'express'
import { registerController } from '~/controllers/user.controller'
import { registerValidator } from '~/middlewares/user.middleware'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()



usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
