import React, { useState } from "react";
import InputForm from "../../helpers/forms/input/Input";
import ButtonHandler from "../../helpers/forms/button/ButtonHandler";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InputCheckbox from "../../helpers/forms/checkbox/InputCheckbox";
import "./signup.css";
import Nav from "../header/nav/Nav";
import { Link } from "react-router-dom";

const SignUp = () => {
	const [fullName, setFullName] = useState("");
	const [checked, setChecked] = useState(false);

	const handleSubmit = (e) => {
		alert(fullName)
	}

	return (
		<div className="signup">
			<Nav />
			<div className="signup-grid">
				<div className="signup-left">
					<p>Great! Let's start your Adventure!</p>
					<h1>Access binaryoptionstrading.com</h1>
					<div className="signup-left-options">
						<div className="signup-left-icon">
							<CheckCircleIcon />
							<span className="signup-left-icon-span">
								Secured Registration Process.
							</span>
						</div>
						<div className="signup-left-icon">
							<CheckCircleIcon />
							<span className="signup-left-icon-span">
								It's free and always will be.
							</span>
						</div>
						<div className="signup-left-icon">
							<CheckCircleIcon />
							<span className="signup-left-icon-span">
								Access binary options from anywhere.
							</span>
						</div>
						<div className="signup-left-icon">
							<CheckCircleIcon />
							<span className="signup-left-icon-span">
								Extraordinary secured Vault.
							</span>
						</div>
						<div className="signup-left-icon">
							<CheckCircleIcon />
							<span className="signup-left-icon-span">
								Unity of valuable determination!
							</span>
						</div>
					</div>
					<Link to="/login">
						<ButtonHandler text="Already Registered?" variant="outlined" />
					</Link>
				</div>
				<div className="signup-Right">
					<form onSubmit={handleSubmit}>
						<div className="signup-right-top">
							<h2 className="signup-details">General Details</h2>
							<div className="signup-right-top-container">
								<InputForm
									label="Full Name"
									handleChange={(e) => setFullName(e.target.value)}
									required
								/>
								<InputForm label="Username" required/>
								<InputForm label="Email" required/>
								<InputForm label="Confirm Email" required/>
							</div>
						</div>
						<div className="signup-right-bottom">
							<h2 className="signup-details"> Security Details</h2>
							<div className="signup-right-bottom-wrapper">
								<InputForm label="Password" type="password" required/>
								<InputForm label="Confirm Password" type="password" required/>
							</div>
						</div>
						<InputCheckbox
							bool={checked}
							label={"I agree to terms & conditions"}
							onCheck={() => setChecked(!checked)}
						/>
						<div className="signup-btn">
							<ButtonHandler text="Signup" variant="contained" type='submit' disabled={!checked}/>
							<ButtonHandler text="continue with Google" variant="standard"  disabled={!checked}/>

						</div>
					</form>
					
				</div>
			</div>
		</div>
	);
};

export default SignUp;
