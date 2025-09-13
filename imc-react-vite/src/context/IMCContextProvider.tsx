import { type ReactNode, useState } from "react";
import { IMCContext } from "./IMCContext";

export function IMCContextProvider({ children }: { children: ReactNode }) {
	const [imc, setIMC] = useState(0);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);

	return (
		<IMCContext.Provider
			value={{ imc, setIMC, height, setHeight, weight, setWeight }}
		>
			{children}
		</IMCContext.Provider>
	);
}

export { IMCContext };
