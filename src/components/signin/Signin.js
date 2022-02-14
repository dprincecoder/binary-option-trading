import React, { useState } from "react";
import InputForm from "../../helpers/forms/input/Input";
import ButtonHandler from "../../helpers/forms/button/ButtonHandler";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputCheckbox from "../../helpers/forms/checkbox/InputCheckbox";
import "./signin.css";
import Nav from "../header/nav/Nav";
import { Link } from "react-router-dom";

const SignIn = () => {
	const [fullName, setFullName] = useState("");
	const [checked, setChecked] = useState(false);
	const handleSubmit = () => {};
	return (
		<div className="signin">
			<Nav />
			<div className="signin-grid">
				<div className="signin-left">
					<p>Unleash your investing potential!</p>
					<h1>Access binaryoptionstrading.com</h1>
					<div className="signin-left-options">
						<div className="signin-left-icon">
							<CheckCircleIcon />
							<span className="signin-left-icon-span">
								Secured Login Process.
							</span>
						</div>
						<div className="signin-left-icon">
							<CheckCircleIcon />
							<span className="signin-left-icon-span">
								256Bit Encryption Protection <small>ON</small>
							</span>
						</div>
						<div className="signin-left-icon">
							<CheckCircleIcon />
							<span className="signin-left-icon-span">
								Ddos Protection <small>ON.</small>
							</span>
						</div>
						<div className="signin-left-icon">
							<CheckCircleIcon />
							<span className="signin-left-icon-span">
								Keylogger protection. <small>ON.</small>
							</span>
						</div>
						<div className="signin-left-icon">
							<CheckCircleIcon />
							<span className="signin-left-icon-span">
								Cookie Store. <small>ON</small>
							</span>
						</div>
					</div>
					<Link to="/register">
						<ButtonHandler text="Don't have account?" variant="outlined" />
					</Link>
				</div>
				<div className="signin-Right">
					<form onSubmit={handleSubmit}>
						<div className="signin-right-top">
							<h2 className="signin-details">Login Details</h2>
							<div className="signin-right-top-container">
								<InputForm label="Email" required />
								<InputForm label="Password" type="password" required />
							</div>
						</div>

						<InputCheckbox
							bool={checked}
							label={"Remember Me"}
							onCheck={() => setChecked(!checked)}
						/>
						<div className="signin-btn">
							<ButtonHandler text="Login" variant="contained" type="submit" />
							<ButtonHandler text="Login" variant="standard" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
