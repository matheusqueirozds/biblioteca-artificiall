import React from "react";
import { Button } from "./PromptStyles";

const TranslateButton = ({ onClick, backgroundColor, text }) => {
	return (
		<Button onClick={onClick} style={{ backgroundColor }}>
			{text}
		</Button>
	);
};

export default TranslateButton;
