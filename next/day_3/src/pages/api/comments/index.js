import dbConnection from "@/helpers/db";

export default async function handler(req, res) {
        const db = await dbConnection();
        const collection = db.collection('comments');
        let data = await collection.find({}).toArray();
        // res.json(data);
        if (req.method == 'POST')
        {
         try {
            console.log(process.env.uri);
            const {username,email,content,product_id,date} = req.body;
            const comment =  await collection.insertOne({username,email,content,product_id,date});
            res.status(200).json({message:comment});
            } catch (error) {
            // Send error response
            res.status(500).json({ success: false, message: 'Error creating comment', error });
          }
        }
        res.status(200).json({ message: 'welcome',data})
  }
  
