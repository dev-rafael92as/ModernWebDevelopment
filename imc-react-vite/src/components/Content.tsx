import { useIMC } from "../hook/useIMC";
import { Form } from "./Form";
import { IMCTable } from "./IMCTable";

export function Content() {
	const { imc } = useIMC();

	return (
		<div className="container">
			<div className="data">
				<div className="form">
					<Form />
				</div>
			</div>
			<div className="data">
				<p>
					Seu IMC &eacute; <span id="imc">{imc != 0 ? imc : null}</span>
				</p>
				{imc > 0 && <IMCTable />}
			</div>
		</div>
	);
}
