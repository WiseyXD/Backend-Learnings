const userRegister = (req, res) => {
	const userName = req.body.name;
	const userEmail = req.body.email;
	const userPassword = req.body.password;

	res.json({
		success: true,
		email: userEmail,
		password: userPassword,
		name: userName,
	});
};

const userLogin = (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
	res.send(
		`<h1>${req.body.name} || ${req.body.password} || ${req.body.email}</h1>`
	);
};

module.exports(userRegister);
module.exports(userLogin);
