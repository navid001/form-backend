const Service = require("../services/Service");

const Controller = {
	formSubmit: async (req, res) => {
		try {
			const {
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
			} = req.body;

			const applicant = await Service.formSubmit({
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
			});

			res.status(201).json({ applicant });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
};

module.exports = Controller;
