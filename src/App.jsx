import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes";
import "tailwind-scrollbar";

const App = () => {
	const queryClient = new QueryClient();
	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<AppRoutes/>
			</QueryClientProvider>
		</Router>
	);
}

export default App;
