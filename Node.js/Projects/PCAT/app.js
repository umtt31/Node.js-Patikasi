const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.set(express.static('public'));

app.get('/', (req, res) => {
  console.log('a Request');
  res.render('index.ejs');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu calisiyor PORT: ${port}`);
});
