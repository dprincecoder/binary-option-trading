import React from "react";
import Button from "@mui/material/Button";

const ButtonHandler = ({
	text,
	handleClick,
	variant,
	color,
	...otherProps
}) => {
	return (
		<Button
			onClick={handleClick}
			color={color}
			variant={variant}
			disableElevation
			{...otherProps}>
			{text}
		</Button>
	);
};

export default ButtonHandler;
