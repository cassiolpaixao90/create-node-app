'use strict';

const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  res.json({ message: 'hello world' });
});
const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log(`> listening on port ${port}`);
});
