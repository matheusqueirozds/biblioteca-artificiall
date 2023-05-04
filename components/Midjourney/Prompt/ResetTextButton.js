import React from "react";
import { Button } from "./PromptStyles";

export default function ResetTextButton({
	onClick,
	backgroundColor,
	textColor,
	text,
}) {
	return (
		<Button onClick={onClick} style={{ backgroundColor, color: textColor }}>
			{text}
		</Button>
	);
}
