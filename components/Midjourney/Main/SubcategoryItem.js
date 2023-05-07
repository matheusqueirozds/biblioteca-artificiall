import React from "react";
import Prompt from "@/components/Midjourney/Prompt/Prompt";
import { PromptsList, Subcategory } from "./MainStyles";

function SubcategoryItem({ subcategory, subcategories, handleViewImageClick, collapsed }) {
	return (
		<Subcategory key={subcategory}>
			<h3>{subcategory}</h3>
			<PromptsList collapsed={collapsed}>
				{subcategories[subcategory].map((prompt) => (
					<Prompt
						key={`${prompt.id}-${prompt.prompt_text}`}
						prompt={prompt}
						onViewImageClick={handleViewImageClick}
					/>
				))}
			</PromptsList>
		</Subcategory>
	);
}

export default SubcategoryItem;
