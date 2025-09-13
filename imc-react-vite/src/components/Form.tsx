import { useIMC } from "../hook/useIMC";
import { InputForm } from "./InputForm";
import { SubmitButton } from "./SubmitButton";

export function Form() {
	const { setHeight, setWeight } = useIMC();
	return (
		<form>
			<InputForm
				id="altura"
				placeholder="Digite sua altura (em metros)"
				label="Altura:"
				type="text"
				setValue={setHeight}
			/>
			<InputForm
				id="peso"
				placeholder="Digite seu peso (em kg)"
				type="text"
				label="Peso:"
				setValue={setWeight}
			/>

			<SubmitButton />
		</form>
	);
}
