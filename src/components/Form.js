import { useState } from "react";
import { useFormValidation } from "./useFormValidation";
import {
	FormField,
	SelectField,
	CheckboxGroup,
	DateTimePicker,
} from "./FormField";
import Summary from "./Summary";

function Form() {
	const { formData, errs, handleChange, validate } = useFormValidation({
		name: "",
		email: "",
		phoneNumber: "",
		applyingPosition: "",
		releExp: "",
		portfolioURL: "",
		mgmtExp: "",
		skills: [],
		interviewTime: "",
	});
	const [submittedData, setSubmittedData] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length === 0) {
			setSubmittedData(formData);
		}
	};

	return (
		<div className="min-h-screen bg-indigo-200 flex items-center justify-center">
			<div className="flex min-h-full flex-1 flex-row justify-center">
				<div className="w-full lg:w-1/2 p-4 shadow-lg ml-8 bg-white max-w-6xl rounded-lg px-6 py-12 my-8 lg:px-8">
					<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Job Aplication Form
					</h2>
					<form onSubmit={handleSubmit} className="space-y-6 mt-8">
						<FormField
							label="Name"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							error={errs.name}
						/>
						<FormField
							label="Email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							error={errs.email}
						/>
						<FormField
							label="Phone Number"
							type="number"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							error={errs.phoneNumber}
						/>
						<SelectField
							label="Applying for Position"
							name="applyingPosition"
							value={formData.applyingPosition}
							onChange={handleChange}
							error={null}
							options={["Developer", "Designer", "Manager"]}
						/>
						{(formData.applyingPosition === "Developer" ||
							formData.applyingPosition === "Designer") && (
							<FormField
								label="Relevant Experience"
								type="number"
								name="releExp"
								value={formData.releExp}
								onChange={handleChange}
								error={errs.releExp}
							/>
						)}
						{formData.applyingPosition === "Designer" && (
							<FormField
								label="Portfolio URL"
								type="text"
								name="portfolioURL"
								value={formData.portfolioURL}
								onChange={handleChange}
								error={errs.portfolioURL}
							/>
						)}
						{formData.applyingPosition === "Manager" && (
							<FormField
								label="Management Experience"
								type="text"
								name="mgmtExp"
								value={formData.mgmtExp}
								onChange={handleChange}
								error={errs.mgmtExp}
							/>
						)}
						<CheckboxGroup
							label="Additional Skills"
							name="skills"
							values={formData.skills}
							options={[
								"JavaScript",
								"CSS",
								"Python",
								"React",
								"Node.js",
							]}
							onChange={handleChange}
							error={errs.skills}
						/>
						<DateTimePicker
							label="Preferred Interview Time"
							name="interviewTime"
							value={formData.interviewTime}
							onChange={handleChange}
							error={errs.interviewTime}
						/>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-500 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Submit
						</button>
					</form>
				</div>
				{submittedData && <Summary submittedData={submittedData} />}
			</div>
		</div>
	);
}

export default Form;
