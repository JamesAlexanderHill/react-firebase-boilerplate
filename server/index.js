const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const api = require('./routes/api');
const port = process.env.SVR_PORT || 3001;
const app = express();

/**
 * Handle requests in order:
 * 1. Handle any API requests
 * 2. Serve built ReactJS files
 * 3. Serve index.html as a fallback for everything else
 */
app.use('/api', api);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req,res) =>res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});