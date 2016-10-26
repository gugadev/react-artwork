const path = require('path');
const express = require('express');
const app = express();


app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/albums', express.static(path.join(__dirname, 'albums')));
app.use('/cities', express.static(path.join(__dirname, 'cities')));
app.get('/', (req, res) => {
  res.type('html');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen('9000', ()  => console.log('Listen at 127.0.0.1:9000'));
