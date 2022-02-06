import React from "react";
import Typical from "react-typical";
import "./header.css";

const Header = () => {
	return (
		<div className="hero">
			<div className="hero-grid">
				<div className="hero-left">
					<Typical
						steps={[
							"Secure",
							1000,
							"Smart",
							1000,
							"Effortless",
							1000,
							"Guarantee",
							1000,
						]}
						loop={Infinity}
						wrapper="b"
					/>
					<h1>Cryptocurrency Investment Platform</h1>
					<p>
						Invest in a Bundle of the top cryptocurrencies, Bitcoin, Ethereum
						and more. <b>Binaryoptiontrading.com</b> is one of the stop roof for
						investors who which to create passive income in crypto markets
						without exposing towards any master skills. At{" "}
						<b>Binaryoptiontrading.com</b> we trust in keeping things simple,
						steady, and transparent. Experience the best at{" "}
						<b>Binaryoptiontrading.com</b> and thank us later.
					</p>
					<div className="hero-left-details">
						<h3 className="hero-left-login">Login</h3>
						<div className="hero-left-start">
							<h3>Get Started</h3>
						</div>
					</div>
				</div>
				<div className="hero-right">
					<img src="assets/btc.jpg" alt="cypto" className="hero-right-img" />
				</div>
			</div>
		</div>
	);
};

export default Header;
