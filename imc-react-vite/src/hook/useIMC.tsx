import { useContext } from "react";
import { IMCContext } from "../context/IMCContext";

export const useIMC = () => {
	const { imc, setIMC, setHeight, height, setWeight, weight } =
		useContext(IMCContext);

	return { imc, setIMC, setHeight, height, setWeight, weight };
};
