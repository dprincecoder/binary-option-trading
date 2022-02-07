import React from "react";
import About from "../components/about/About";
import Calculate from "../components/calculateProfit/Calculate";
import Header from "../components/header/Header";
import Nav from "../components/header/nav/Nav";
import Plans from "../components/investmentPlans/Plans";

const HomePage = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Plans />
			<Calculate />
		</>
	);
};

export default HomePage;
