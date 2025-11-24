const express = require('express');
const app = express();

// אין שימוש ב-helmet או כותרות אבטחה
app.get('/xss', (req, res) => {
    const q = req.query.q;
    res.send(`<div>${q}</div>`);
  });

app.listen(8080, '0.0.0.0');
