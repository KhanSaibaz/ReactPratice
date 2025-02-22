const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql2');  

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());


var con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",        
  user: "sql12764062",        
  password:"CxicR3YWYt", 
  database:"sql12764062",    
  port: 3306
});

con.connect(function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
  console.log("Connected to the database!");
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
