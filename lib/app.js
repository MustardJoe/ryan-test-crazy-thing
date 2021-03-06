const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/people', require('./routes/people'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
