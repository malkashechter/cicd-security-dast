const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Test app for ZAP scan');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
