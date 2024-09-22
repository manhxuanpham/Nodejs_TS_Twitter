import { Collection, Db, MongoClient } from 'mongodb'
import User from '~/models/schemas/User.schema'
import { envConfig } from '~/constants/config'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import Follower from '~/models/schemas/Followers.shema'
const uri = `mongodb+srv://${envConfig.dbUsername}:${envConfig.dbPassword}@myproject.ifuwkkq.mongodb.net/?retryWrites=true&w=majority&appName=MyProject`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(envConfig.dbName)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('connect mongodb success')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(envConfig.dbUsersCollection)
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(envConfig.dbRefreshTokensCollection)
  }
  get followers(): Collection<Follower> {
    return this.db.collection(envConfig.dbFollowersCollection)
  }
}
const databaseService = new DatabaseService()
export default databaseService
