const { successfulAPIResponse, errorResponse } = require("./helper");

const getRequest = (req, res) => {
	let result = {
		name: "Chukwuma Daniel",
		github: "@danielchuks",
		email: "iamdanielchukwuma@gmail.com",
		mobile: "07037910738",
		twitter: "@iamdanielchucks",
	};
	return successfulAPIResponse(res, "My Rule-Validation API", result, 200);
};

const handlerRuleValidation = (req, res) => {
	const rule = req.body.rule;
	const data = req.body.data;

	console.log(rule, typeof data);

	if (rule === undefined || data === undefined) {
		return errorResponse(res, "The Rule and Data fields are required", null);
	}

	if (typeof rule !== "object") {
		return errorResponse(res, "Rule must be a json object", null);
	}
	if (!rule.field || rule.field === undefined) {
		return errorResponse(res, "[field] is required", null);
	}

	if (rule.condition === undefined) {
		return errorResponse(res, "[condition] is required", null);
	}

	if (rule.condition_value === undefined) {
		return errorResponse(res, "[condition_value] is required", null);
	}

	let acceptedDatatypes = ["object", "array", "string"];

	if (!acceptedDatatypes.includes(typeof data)) {
		return errorResponse(res, "Unsupported datatype", null);
	}

	// Validation

	//Check what value is in the rule.field
	let testValue =
		rule.field.match(/\./g) !== null ? rule.field.match(/\./g).length : 0;

	if (testValue > 2) {
		return errorResponse(res, "Unsupported datatypeDDDDDDDDDD", null);
	}
	return errorResponse(res, testValue, null);
};

module.exports = {
	getRequest,
	handlerRuleValidation,
};
