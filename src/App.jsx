import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes";
import "tailwind-scrollbar";

const App = () => {
	return (
		<Router>
			<AppRoutes/>
		</Router>
	);
}

export default App;
