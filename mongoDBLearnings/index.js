const express = require("express");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://0.0.0.0:27017/StudentRecord")
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.log("Got an error", err);
	});

const student = new mongoose.Schema({
	name: String,
	coder: Boolean,
	age: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
	const ss = new Student({
		name: "Aryan",
		age: 20,
		coder: true,
	});
	console.log(ss);
	await ss.save();
};

adder();

// Else we can use Create method

const adder2 = async () => {
	const ss = await Student.create({
		name: "Nikshe",
		age: 21,
		coder: true,
	});
};
adder2();

const read = async () => {
	const ss = await Student.find({ name: "Nikshe" });
	console.log(ss);
};

read();
