import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Form />} />
			</Routes>
		</Router>
	);
}

export default App;
