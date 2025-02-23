const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //Simulate an error
  //throw new Error('Something went wrong!');
  res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});