import {Db, MongoClient} from 'mongodb'



const uri = "mongodb+srv://manhhoathuan:manhhoathuan123@myproject.ifuwkkq.mongodb.net/?retryWrites=true&w=majority&appName=MyProject"
class DatabaseService {
  private client :MongoClient
  private db :Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('myproject')
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log("connect mongodb success")
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
const databaseService = new DatabaseService()
export default databaseService