import { createContext } from "react";

export const IMCContext = createContext<{
	imc: number;
	setIMC: React.Dispatch<React.SetStateAction<number>>;
	weight: number;
	setWeight: React.Dispatch<React.SetStateAction<number>>;
	height: number;
	setHeight: React.Dispatch<React.SetStateAction<number>>;
}>({
	imc: 0,
	setIMC: () => {},
	height: 0,
	setHeight: () => {},
	weight: 0,
	setWeight: () => {},
});
