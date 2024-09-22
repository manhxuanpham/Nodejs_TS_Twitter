import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
const env = process.env.NODE_ENV
const envFilename = `.env.${env}`

if (!env) {
  console.log(`Bạn chưa cung cấp biến môi trường NODE_ENV (ví dụ: development, production)`)
  console.log(`Phát hiện NODE_ENV = ${env}`)
  process.exit(1)
}
console.log(`Phát hiện NODE_ENV = ${env}, vì thế app sẽ dùng file môi trường là ${envFilename}`)
if (!fs.existsSync(path.resolve(envFilename))) {
  console.log(`Không tìm thấy file môi trường ${envFilename}`)
  console.log(`Lưu ý: App không dùng file .env, ví dụ môi trường là development thì app sẽ dùng file .env.development`)
  console.log(`Vui lòng tạo file ${envFilename} và tham khảo nội dung ở file .env.example`)
  process.exit(1)
}
config({
  path: envFilename
})
export const isProduction = env === 'production'
config()

export const envConfig = {
  port: (process.env.PORT as string) || 4000,
  host: process.env.HOST as string,
  dbName: process.env.DB_NAME as string,
  dbUsername: process.env.DB_USERNAME as string,
  dbPassword: process.env.DB_PASSWORD as string,
  dbUsersCollection: process.env.DB_USERS_COLLECTION as string,
  jwtSecretAccessToken: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  jwtSecretRefreshToken: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  jwtSecretEmailVerifyToken: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
  jwtSecretForgotPasswordToken: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
  emailVerifyTokenExpiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN as string,
  passwordSecret: process.env.PASSWORD_SECRET as string,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
  forgotPasswordTokenExpiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN as string,
  dbRefreshTokensCollection: process.env.DB_REFRESH_TOKENS_COLLECTION as string,
  dbFollowersCollection: process.env.DB_FOLLOWERS_COLLECTION as string
}
