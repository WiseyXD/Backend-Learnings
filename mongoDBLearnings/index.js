const express = require("express");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://0.0.0.0:27017")
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log("Got an error", err);
	});
