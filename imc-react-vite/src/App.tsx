import "./App.css";
import { Content } from "./components/Content";
import { IMCContextProvider } from "./context/IMCContextProvider";

function App() {
	return (
		<IMCContextProvider>
			<Content />
		</IMCContextProvider>
	);
}

export default App;
