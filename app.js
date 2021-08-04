const express = require("express");
const app = express();
const helmet = require('helmet');
const StuffController = require('./controllers/stuff-controller');
const PORT = process.env.PORT || 5100;


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", PORT);

const ver = "/v1";

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization "
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE, OPTIONS"
	);
	next();
});


// register controllers / routes here

app.use(ver + '/stuff', StuffController);

// <====>

module.exports = app;
