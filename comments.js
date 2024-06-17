// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments controller
const commentsController = require('./controllers/comments.js');
app.use('/comments', commentsController);

app.listen(port, () => {
  console.log('listening on port', port);
});