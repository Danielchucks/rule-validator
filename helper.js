const successfulAPIResponse = (res, message, data, code = 200) => {
	let response = {
		status: "success",
		message,
	};
	if (typeof data === "object") {
		response = Object.assign({ data }, response);
	}
	return res.status(code).json(response);
};

module.exports = {
	successfulAPIResponse,
};
