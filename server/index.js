const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static('./public'));
var saveProducts = {};

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});