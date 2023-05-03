import React from "react";
import { Button } from "./PromptStyles";

const CopyButton = ({ onClick, backgroundColor, text }) => {
	return (
		<Button onClick={onClick} style={{ backgroundColor }}>
			{text}
		</Button>
	);
};

export default CopyButton;
