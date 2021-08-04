const express = require("express");
const router = express.Router();
const StuffService = require('../services/stuff-service');

router.get("/", (req, res, next) => {
	res.status(200);
	res.send("you reached here");
});

router.post("/", (req, res, next) => {
	res.status(201).json({ message: "stuff added successfully" });
});

module.exports = router;
