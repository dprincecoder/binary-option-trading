import React from "react";
import { Link } from "react-router-dom";
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
						<b>Binaryoptiontrade.com</b> and thank us later.
					</p>
					<div className="hero-left-details">
						<Link to="/login">
							<h3 className="hero-left-login">Login</h3>
						</Link>
						<div className="hero-left-start">
							<Link to="/signup">
								<h3>Start Trading</h3>
							</Link>
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
