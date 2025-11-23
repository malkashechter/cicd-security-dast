const express = require('express');
const app = express();

// אין שימוש ב-helmet או כותרות אבטחה
app.get('/', (req, res) => {
  res.send('<h1>Insecure Page</h1>');
});

app.listen(8080, '0.0.0.0');