import React, { useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Nav = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className={`nav ${toggle ? "active" : ""}`}>
			<div className="my-admin-nav">
				<Link to="/my-admin">
				my admin
				</Link>
				</div>
			<div className="nav-items">
				<Link to="/" className="nav-logo">
					<h1>Binary</h1>
					<div>
						<h2 className="sml-txt">Options trade</h2>
					</div>
				</Link>
				<ul className="nav-ul">
					<Link to="/" className="nav-list active">
						Home
					</Link>
					<Link to="/contact" className="nav-list active">
						Contact us
					</Link>
					<Link to="/login" className="nav-list active login">
						Login
					</Link>
					<Link to="/signup" className="register">
						<li className="nav-lis ">Get Started</li>
					</Link>
				</ul>
				<div className="bar" onClick={() => setToggle(!toggle)}>
					<MenuIcon />
				</div>
			</div>
		</div>
	);
};

export default Nav;
