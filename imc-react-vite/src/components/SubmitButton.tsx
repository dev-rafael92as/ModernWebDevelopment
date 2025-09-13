import { useIMC } from "../hook/useIMC";
import { calculaImc } from "../utils";

export function SubmitButton() {
	const { height, weight, setIMC } = useIMC();
	async function handleSubmit() {
		const imc = await calculaImc(height, weight);
		setIMC(Number(imc.imc));
	}

	return (
		<div className="row">
			<button type="button" id="calcular" onClick={handleSubmit}>
				Calcular IMC
			</button>
		</div>
	);
}
