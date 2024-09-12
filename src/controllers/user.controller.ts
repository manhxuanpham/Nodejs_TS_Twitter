import { NextFunction, Request, Response } from 'express'
import userService from '../services/user.service'
import { RegisterReqBody } from '~/models/requests/User.request'
import { ParamsDictionary } from 'express-serve-static-core'

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  console.log(req.body)
  const result = await userService.register(req.body)
  return res.json({
    message: 'register success',
    result
  })
}