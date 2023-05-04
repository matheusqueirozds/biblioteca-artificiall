import React from "react";
import { Button } from "./PromptStyles";

const TranslateButton = ({ onClick, backgroundColor, textColor, text }) => {
	return (
		<Button onClick={onClick} style={{ backgroundColor, color: textColor }}>
			{text}
		</Button>
	);
};

export default TranslateButton;
