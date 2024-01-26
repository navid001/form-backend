const Applicant = require("../models/Applicant");

const Services = {
	formSubmit: async (
		applicant_name,
		email,
		contact_number,
		linkedin,
		startup_name,
		websiteRadio,
		website_link,
		facebookRadio,
		facebook_link,
		startupStreamRadio,
		other_stream_input,
		problem_description,
		proposed_solution,
		mvpRadio,
		demo_link,
		support_expectations,
	) => {
		const applicant = new Applicant(
			applicant_name,
			email,
			contact_number,
			linkedin,
			startup_name,
			websiteRadio,
			website_link,
			facebookRadio,
			facebook_link,
			startupStreamRadio,
			other_stream_input,
			problem_description,
			proposed_solution,
			mvpRadio,
			demo_link,
			support_expectations,
		);
		await applicant.save();
		return applicant;
	},
};

module.exports = Services;
