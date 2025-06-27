var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const URL = process.env.BACKEND_URL || 'http://backend:5000/api';

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', function (req, res) {
  res.render('index', { data: null });
});

app.post('/submit', async function (req, res) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body)
  };

  try {
    let response = await fetch(URL, options);
    response = await response.json();
    res.render('index', { data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Internal Server Error.' });
  }
});

app.listen(3000, function () {
  console.log('Frontend listening on port 3000!');
});
