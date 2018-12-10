const fs = require('fs');
const ndjson = require('ndjson');

let hamburger = [];

fs.createReadStream('hamburger.ndjson')
  .pipe(ndjson.parse())
  .on('data', function(obj) {

    hamburger.push(obj);

  })


  const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.get('/hamburger', (request, response) => {
  const index = Math.floor(Math.random()*hamburger.length);
  response.send(hamburger[index]);
});

app.use(express.static('public'))
