const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('a Request');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Sunucu calisiyor PORT: ${port}`);
});
