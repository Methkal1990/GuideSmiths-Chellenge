const express = require('express');
const phones = require('./routes/phones');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`
  endpoints are: <br>
  GET /api/v1/phones --> get list of phones <br>
  GET /api/v1/phones/:phoneid --> get a specific phone <br>
  POST /api/v1/phones --> create a new phone <br>
  PUT /api/v1/phones/:phoneid --> update an existing phone <br>
  DELETE /api/v1/phones/:phoneid --> delete an existing phone <br>
  `);
});

app.use('/api/v1/phones', phones);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`));

module.exports.app = app;
