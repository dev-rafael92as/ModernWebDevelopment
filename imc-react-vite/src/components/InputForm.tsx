import type { ChangeEvent } from "react";

interface InputProps {
	type: string;
	label: string;
	id: string;
	placeholder: string;
	setValue: React.Dispatch<React.SetStateAction<number>>;
}

export function InputForm({
	type,
	label,
	id,
	placeholder,
	setValue,
}: InputProps) {
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setValue(Number(event.target.value.replaceAll(",", ".")));
	}

	return (
		<fieldset className="row">
			<label>{label}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</fieldset>
	);
}
