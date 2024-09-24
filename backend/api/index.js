const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

//Cors and file path (db) initialisation
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],        
    optionsSuccessStatus: 200        
  }));
app.use(express.json());

const logFilePath = path.join(__dirname, '../db.json');


// Helper function to read logs from file
const readDb = () => {
  const data = fs.readFileSync(logFilePath);
  return JSON.parse(data);
};

// Helper function to write logs to file
const writeDb = (logs) => {
  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
};


//API
app.post('/interactions', (req, res) => {
  const { type } = req.body;
  let interactionsData = readDb();

  if (interactionsData[type] !== undefined) {
    interactionsData[type]++;
    writeDb(interactionsData); 
  }

  res.status(200).json({ message: "Interaction updated successfully" });
});

app.get('/interactions', (req, res) => {
  const interactionsData = readDb();
  res.status(200).json(interactionsData);
});


//Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
