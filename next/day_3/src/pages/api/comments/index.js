import dbConnection from "../../../helpers/db";

export const getComments = async ()=>
{
   const db = await dbConnection();
   // const db = client.db();
   const collection = db.collection('comments');
   let data = await collection.find().toArray();
   // client.close();
   console.log(data);
   return data;
}


export default async function handler(req, res) {
        const db = await dbConnection();
      //   const db = client.db();
        const collection = db.collection('comments');
        let data = await collection.find().toArray();
        // res.json(data);
        if (req.method == 'POST')
        {
         try {
            const {username,email,content,product_id,date} = req.body;
            const comment =  await collection.insertOne({username,email,content,product_id,date});
            // client.close();
            res.status(200).json({message:comment});
            } catch (error) {
            // Send error response
            res.status(500).json({ success: false, message: 'Error creating comment', error });
          }
        }
        console.log(data);
      //   client.close();
        res.status(200).json({ message: 'welcome',data})
  }
  
