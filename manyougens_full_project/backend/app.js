
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('frontend'));

app.get('/interpret', (req, res) => {
  const { mode, style } = req.query;
  res.json({
    message: `Interpretacja: Twoje geny wskazują na ${mode} i ${style}. Przykładowa odpowiedź.`
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
