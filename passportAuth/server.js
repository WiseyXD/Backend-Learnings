const express = require("express");
const app = express();
const { connectDB, Users } = require("./database.js");
const ejs = require("ejs");
const { body, validationResult } = require("express-validator"); // Add express-validator

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/register", (req, res) => {
	res.render("register");
});

app.get("/login", (req, res) => {
	res.render("login");
});

// Register User
app.post(
	"/register",
	[
		// Add validation for the user input
		body("username").notEmpty().isString(),
		body("password").notEmpty().isString(),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const user = await Users.findOne({ username: req.body.username });
		if (user) {
			return res
				.status(400)
				.json({ errors: [{ msg: "User Already Exists" }] });
		}

		try {
			const newUser = await Users.create(req.body);
			res.status(201).json({
				success: true,
				newUser,
			});
		} catch (error) {
			console.error("Error creating user:", error);
			res.status(500).json({ errors: [{ msg: "Server Error" }] });
		}
	}
);

app.listen(3000, () => {
	console.log("Server is listening at 3000");
});
