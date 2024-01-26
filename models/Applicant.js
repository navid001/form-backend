const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
	applicant_name: { type: String, required: true },
	email: { type: String, required: true },
	contact_number: { type: String, required: true },
	linkedin: { type: String },
	startup_name: { type: String, required: true },
	websiteRadio: { type: String },
	website_link: { type: String },
	facebookRadio: { type: String },
	facebook_link: { type: String },
	startupStreamRadio: { type: String },
	other_stream_input: { type: String },
	problem_description: { type: String },
	proposed_solution: { type: String },
	mvpRadio: { type: String },
	demo_link: { type: String },
	support_expectations: { type: String },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
