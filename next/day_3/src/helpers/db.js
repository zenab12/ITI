
import { MongoClient } from "mongodb"
const dbConnection =async ()=>{
    let dbConnect = await MongoClient.connect(process.env.uri,{ useNewUrlParser: true, useUnifiedTopology: true });
   console.log(dbConnect.db())
    return dbConnect.db();
}

export default dbConnection