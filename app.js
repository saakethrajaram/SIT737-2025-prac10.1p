const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app on Kubernetes!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});