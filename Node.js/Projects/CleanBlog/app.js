const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

const port = 3002;
app.listen(port, () => {
  console.log(`Sunucu calisiyor port: ${port}`);
});
