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

module.exports(userRegister);
