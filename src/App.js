import React, { useEffect } from "react";
import Layout from "./views/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage, SigninPage, DashboardPage } from "./pages";
import Contact from "./components/contact/Contact";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}></Route>
				<Route index element={<Layout />}></Route>
				<Route path="/signup" element={<SignupPage />}></Route>
				<Route path="/login" element={<SigninPage />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route
					path="/dashboard/user/:userId"
					element={<DashboardPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
