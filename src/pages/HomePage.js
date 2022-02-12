import React from "react";
import About from "../components/about/About";
import Calculate from "../components/calculateProfit/Calculate";
import CoinMarket from "../components/coinMarket/CoinMarket";
import Header from "../components/header/Header";
import Nav from "../components/header/nav/Nav";
import Plans from "../components/investmentPlans/Plans";
import Testimony from "../components/testimonies/Testimony";

const HomePage = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Plans />
			<Calculate />
			<Testimony />
			<CoinMarket />
		</>
	);
};

export default HomePage;
