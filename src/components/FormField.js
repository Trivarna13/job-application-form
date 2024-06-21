function FormField({ label, type, name, value, onChange, error }) {
	return (
		<div>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 sm:text-sm sm:leading-6"
				></input>
				{error && <p className="text-red-500">{error}</p>}
			</div>
		</div>
	);
}

function SelectField({ label, name, value, onChange, error, options }) {
	return (
		<div>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className="mt-2">
				<select
					name={name}
					value={value}
					onChange={onChange}
					className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 sm:text-sm sm:leading-6"
				>
					<option value="">Select</option>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				{error && <p className="text-red-500">{error}</p>}
			</div>
		</div>
	);
}

function CheckboxGroup({ label, name, values, options, onChange, error }) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			{options.map((option) => (
				<div key={option} className="mt-1">
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							name={name}
							value={option}
							checked={values.includes(option)}
							onChange={onChange}
							className="form-checkbox"
						/>
						<span className="ml-2">{option}</span>
					</label>
				</div>
			))}
			{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
		</div>
	);
}

function DateTimePicker({ label, name, value, onChange, error }) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				type="datetime-local"
				name={name}
				value={value}
				onChange={onChange}
				className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			/>
			{error && <p className="mt-1 text-sm text-red-600">{error}</p>}
		</div>
	);
}

export { FormField, SelectField, CheckboxGroup, DateTimePicker };
