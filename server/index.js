const express = require('express');
const path = require('path');
const controller = require('./controller.js')

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static('./public'));

app.get('/players/leaders', async (req, res) => {

  try {
    //console.log(req.query.year);
    const results = await controller.getLeaders(req.query.year);
    res.status(200).send(results);
  } catch(err) {
    res.sendStatus(404);
  }
})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});