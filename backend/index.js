const express = require('express');
const phones = require('./routes/phones');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`
  endpoints are:
  GET /api/v1/phones --> get list of phones
  GET /api/v1/phones/:phoneid --> get a specific phone
  `);
});

app.use('/api/v1/phones', phones);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`));
