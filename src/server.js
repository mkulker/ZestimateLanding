const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 4000; // Changed port to 4000

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1); // Exit with an error code
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors()); // Enable all CORS requests
app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.post('/submit', async (req, res) => {
  try {
    console.log('Received request body:', req.body); // Log the request body

    await client.connect();
    const db = client.db('zestimate'); // Replace with your database name
    const collection = db.collection('userData'); // Replace with your collection name

    const result = await collection.insertOne(req.body);

    console.log('Insert result:', result); // Log the result of the insert operation

    res.status(201).send({ success: true, data: result });
  } catch (error) {
    console.error('Error during submission:', error); // Log the error
    res.status(500).send({ success: false, error: error.message });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
