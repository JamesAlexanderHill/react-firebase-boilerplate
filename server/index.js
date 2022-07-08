const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const api = require('./routes/api');
const port = process.env.SVR_PORT || 3001;

const app = express();

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});