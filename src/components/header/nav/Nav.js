import React, { useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className={`nav ${toggle ? "active" : ""}`}>
			<div className="nav-items">
				<div className="nav-logo">
					<h1>Binary</h1>
					<div>
						<h2 className="sml-txt">Options trading</h2>
					</div>
				</div>
				<ul className="nav-ul">
					<li className="nav-list">Home</li>
					<li className="nav-list">About</li>
					<li className="nav-list">Contact us</li>
					<li className="nav-list login">Login</li>
					<div className="register">
						<li className="nav-list ">Get Started</li>
					</div>
				</ul>
				<div className="bar" onClick={() => setToggle(!toggle)}>
					<MenuIcon />
				</div>
			</div>
		</div>
	);
};

export default Nav;
