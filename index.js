require('dotenv').config();
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

const apiRouter = require('./routes/api');

require('./db');

app.use(express.json());

app.use('/api', apiRouter);

app.listen( port, () => {
  console.log(`Server running on port ${port}`);
});