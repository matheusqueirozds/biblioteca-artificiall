import React from "react";
import { Button } from "./PromptStyles";

const CopyButton = ({ onClick, backgroundColor, textColor, text }) => {
	return (
		<Button onClick={onClick} style={{ backgroundColor, color: textColor }}>
			{text}
		</Button>
	);
};

export default CopyButton;
