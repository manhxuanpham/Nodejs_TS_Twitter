import { TokenType, UserVerifyStatus } from '~/constants/enums'
import { JwtPayload } from 'jsonwebtoken'

export interface RegisterReqBody {
  name: string
  email: string
  password: string
  confirm_password: string
  date_of_birth: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: UserVerifyStatus
  exp: number
  iat: number
}

export interface LoginReqBody {
  email: string
  password: string
}
