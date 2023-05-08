// utils/readJson.js

const fs = require("fs");
const sortPromptsAlphabetically = require("./sortPromptsAlphabetically");

fs.readFile("./data/midjourney.json", "utf-8", (err, jsonString) => {
	if (err) {
		console.log("Erro na leitura do arquivo:", err);
		return;
	}
	try {
		const data = JSON.parse(jsonString);

		// Agora que temos o objeto data, vamos ordená-lo
		sortPromptsAlphabetically(data);
	} catch (err) {
		console.log("Erro ao analisar o JSON:", err);
	}
});
