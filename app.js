const express = require("express");
const app = express();
const helmet = require('helmet');
const StuffController = require('./controllers/stuff-controller');
const PORT = process.env.PORT || 5100;
const corsConfig = require('./config/cors');


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", PORT);

const ver = "/v1";

app.use(corsConfig);


// register controllers / routes here
app.use(ver + '/stuff', StuffController);

// <===>

module.exports = app;
