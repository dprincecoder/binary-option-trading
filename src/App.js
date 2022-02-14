import * as React from "react";
import Layout from "./views/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage, SigninPage } from "./pages";
import Contact from "./components/contact/Contact";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}></Route>
				<Route index element={<Layout />}></Route>
				<Route path="/signup" element={<SignupPage />}></Route>
				<Route path="/login" element={<SigninPage />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
