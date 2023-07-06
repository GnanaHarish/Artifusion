require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors')
const artifusionRoute = require('./routes/artifusionRoute');
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())
app.use('/', artifusionRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});