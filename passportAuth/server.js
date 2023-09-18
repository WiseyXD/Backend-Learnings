const express = require("express");
const app = express();
const { connectDB, User } = require("./database");
const ejs = require("ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

// Register User
app.post("/register", async (req, res) => {
	const user = await User.findOne({ username: req.body.username });
	if (user) {
		return res.status(500).send("User Already Exists");
	}
	const newUser = await User.create(req.body);
	res.status(201).json({
		success: true,
		newUser,
	});

	res.send("User Creation");
});

app.listen(3000, () => {
	console.log("Server is listening at 3000");
});
