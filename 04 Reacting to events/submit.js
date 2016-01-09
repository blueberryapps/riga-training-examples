const express = require('express');
const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'null');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(allowCrossDomain);

app.post('/post', (req, res, next) => {
  res.status(201).send('Received: ' + req.body);
});

app.get('/get', (req, res, next) => {
  res.json({name: 'Mr.', city: 'Riga'});
});

app.listen(3001);
