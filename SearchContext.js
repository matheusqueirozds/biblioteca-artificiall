import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
	return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	const value = {
		searchTerm,
		handleSearch,
	};

	return (
		<SearchContext.Provider value={value}>{children}</SearchContext.Provider>
	);
};
