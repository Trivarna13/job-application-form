import { useState } from "react";

export function useFormValidation(initialState) {
	const [formData, setFormData] = useState(initialState);
	const [errs, setErrs] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
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

		if (!formData.age) {
			errs.age = "Age is required";
		} else if (isNaN(formData.age) || formData.age <= 0) {
			errs.age = "Age must be a number greater than 0";
		}

		if (formData.attendingWithGuest === "Yes" && !formData.guestName) {
			errs.guestName = "Guest Name is required";
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
