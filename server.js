
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/aiweb.html');
});

app.post('/message', (req, res) => {
  // Handle message logic here
  res.send('Message received!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
