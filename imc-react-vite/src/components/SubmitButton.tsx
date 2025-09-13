import { useIMC } from "../hook/useIMC";
import { calculaImc } from "../utils";

export function SubmitButton() {
	const { height, weight } = useIMC();
	function handleSubmit() {
		calculaImc(weight, height);
	}

	return (
		<div className="row">
			<button type="submit" id="calcular" onClick={handleSubmit}>
				Calcular IMC
			</button>
		</div>
	);
}
