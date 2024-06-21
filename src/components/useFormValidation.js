import { useState } from "react";

export function useFormValidation(initialState) {
	const [formData, setFormData] = useState(initialState);
	const [errs, setErrs] = useState({});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			setFormData({
				...formData,
				[name]: checked
					? [...formData[name], value]
					: formData[name].filter((item) => item !== value),
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const validate = () => {
		let errs = {};

		if (!formData.name) {
			errs.name = "Name is required";
		}

		if (!formData.email) {
			errs.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errs.email = "Invalid Email";
		}

		if (!formData.phoneNumber) {
			errs.phoneNumber = "Phone Number is required";
		} else if (!/^\d{10}$/.test(formData.phoneNumber)) {
			errs.phoneNumber = "Invalid Phone Number";
		}

		if (
			formData.applyingPosition === "Developer" ||
			formData.applyingPosition === "Designer"
		) {
			if (!formData.releExp) {
				errs.releExp = "Relevant Experience is required";
			} else if (isNaN(formData.releExp) || formData.releExp <= 0) {
				errs.releExp =
					"Relevant Experience must be a number greater than 0";
			}
		}

		if (formData.applyingPosition === "Designer") {
			if (!formData.portfolioURL) {
				errs.portfolioURL = "Portfolio URL is required";
			} else if (
				!/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
					formData.portfolioURL
				)
			) {
				errs.portfolioURL = "Invalid Portfolio URL";
			}
		}

		if (formData.applyingPosition === "Manager") {
			if (!formData.mgmtExp) {
				errs.mgmtExp = "Management Experience is required";
			}
		}

		if (formData.skills.length === 0) {
			errs.skills = "At least one skill must be selected";
		}

		if (!formData.interviewTime) {
			errs.interviewTime = "Preferred Interview Time is required";
		}

		setErrs(errs);
		return errs;
	};

	return {
		formData,
		errs,
		handleChange,
		validate,
		setFormData,
	};
}
