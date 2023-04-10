
import { MongoClient } from "mongodb"
const uri = 'mongodb+srv://Zien:Zien1234@atlascluster.aokq6ht.mongodb.net/?retryWrites=true&w=majority';

const dbConnection =async ()=>{
    const client =new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
      
   const res = await client.connect();
  return res.db("ecomerce");

    // let dbConnect = await MongoClient.connect(process.env.uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    // return dbConnect;
}




export default dbConnection
