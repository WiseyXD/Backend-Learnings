const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const bParser = require("body-parser");
const app = express();
const port = 4000;
app.use(bParser.urlencoded({ extends: false }));
app.use(express.json());

// app.get("/", (req, res) => {
// 	res.send("<h1>HOME</h1>");
// });

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
	// res.send("<h1>Aryan has created an api to submit form</h1>");
});

app.post("/api/login", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
	res.send(
		`<h1>${req.body.name} || ${req.body.password} || ${req.body.email}</h1>`
	);
});

app.post("/api/register", (req, res) => {
	const userName = req.body.name;
	const userEmail = req.body.email;
	const userPassword = req.body.password;

	res.json({
		success: true,
		email: userEmail,
		password: userPassword,
		name: userName,
	});
});

app.listen(port, () => {
	console.log(`Server Is working on port : ${port}`);
});
// const ans = http.createServer((req, res, next) => {
// 	req();
// });
