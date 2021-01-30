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

const failedValidation = (res, message, rule, data, code = 400) => {
	let response = {
		status: "error",
		message,
	};
	return res.status(code).json(response);
};

const errorResponse = (res, message, data = null, code = 400) => {
	let response = {
		status: "error",
		message,
		data,
	};
	return res.status(code).json(response);
};
module.exports = {
	successfulAPIResponse,
	failedValidation,
	errorResponse,
};
