const { connectToDatabase } = require("../../lib/mongodb");

export default function handler(req, res) {
  switch(req.method) {
    case "POST": {
      return addUserData(req, res);
    }
  }

  // insert data to mongodb
  async function addUserData(req, res) {
    try {
      // connect to the database
      let { db } =  await connectToDatabase();
      // add the user
      await db.collection('users').insertOne(JSON.parse(req.body));
      // return a message
      return res.json({
        message: "User added Successfully",
        success: true
      })
    } catch(error) {
      return res.json({
        message: new Error(error).message,
        success: false
      })
    }
  }
}
