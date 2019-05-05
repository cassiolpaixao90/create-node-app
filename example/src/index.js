'use strict';

const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  try {
    const thing = await Promise.resolve({ one: 'two' });
    return res.json({ ...thing, hello: 'world' });
  } catch (e) {
    return res.json({ error: e.message });
  }
});
const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    console.log('> in developmen');
  }

  console.log(`> listening on port ${port}`);
});
