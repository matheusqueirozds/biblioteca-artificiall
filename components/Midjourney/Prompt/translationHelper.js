export const translateText = async (text, targetLanguage) => {
	const maxChunkSize = 200;
	const textChunks = [];

	for (let i = 0; i < text.length; i += maxChunkSize) {
		textChunks.push(text.slice(i, i + maxChunkSize));
	}

	const translatedChunks = await Promise.all(
		textChunks.map(async (chunk) => {
			const response = await fetch(
				`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
					chunk
				)}`
			);
			const data = await response.json();
			return data[0][0][0];
		})
	);

	return translatedChunks.join("");
};
