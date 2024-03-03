// import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

// add middleware
app.use(bodyParser.json());
app.use(cors());

// define endpoints
app.get('/', (req, res) => {
  res.send('Welcome to our online music education platform!');
});

app.get('/music-theory', (req, res) => {
  res.send('Here you can learn music theory!');
});

app.get('/performance-skills', (req, res) => {
  res.send('Here you can learn performance skills!');
});

app.get('/historical-knowledge', (req, res) => {
  res.send('Here you can learn about music history!');
});

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});