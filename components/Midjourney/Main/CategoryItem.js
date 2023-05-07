import React from "react";

function CategoryItem({ category, active, onClick }) {
	return (
		<li
			key={category.name}
			onClick={onClick}
			className={active ? "active" : ""}
			aria-label={`Categoria ${category.name}`}
			role="menuitem"
		>
			{category.name}
		</li>
	);
}

export default CategoryItem;
