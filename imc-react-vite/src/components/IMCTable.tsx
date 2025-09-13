import { useIMC } from "../hook/useIMC";

export function IMCTable() {
	const { imc } = useIMC();
	const intervalos = [
		{ min: 0, max: 18.4, classificacao: "Abaixo do peso" },
		{ min: 18.4, max: 24.9, classificacao: "Peso normal" },
		{ min: 24.9, max: 29.9, classificacao: "Sobrepeso" },
		{ min: 29.9, max: Infinity, classificacao: "Obesidade" },
	];

	return (
		<table id="tabela-imc">
			<thead>
				<tr>
					<th>Classifica&ccedil;&atilde;o</th>
					<th>IMC</th>
				</tr>
			</thead>
			<tbody>
				{intervalos.map((intervalo) => {
					const values = `${intervalo.min} - ${intervalo.max}`;
					return (
						<tr
							className={`${
								imc >= intervalo.min && imc < intervalo.max
									? "destaque-imc"
									: ""
							}`}
						>
							<td>{intervalo.classificacao}</td>
							<td>{values}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
