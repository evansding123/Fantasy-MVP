const express = require('express');
const path = require('path');
const controller = require('./controller.js')

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static('./public'));

app.get('/players/leaders', async (res, req) => {
  try {
    const results = await controller.getSRAPI();
    res.status(200).send(results);
  } catch (err) {
    res.sendStatus(404);
  }

})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});