const { successfulAPIResponse } = require("./helper");

exports.getRequest = (req, res) => {
	let result = {
		name: "Chukwuma Daniel",
		github: "@danielchuks",
		email: "iamdanielchukwuma@gmail.com",
		mobile: "07037910738",
		twitter: "@iamdanielchucks",
	};
	return successfulAPIResponse(res, "My Rule-Validation API", result, 200);
};
