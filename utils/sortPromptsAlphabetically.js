// utils/sortPromptsAlphabetically.js

const fs = require("fs");

function sortPromptsAlphabetically(data) {
  // Encontre o objeto que contém o array "prompts"
  const category = data.find((item) => item.hasOwnProperty("prompts"));

  if (!category) {
    console.log("Nenhuma categoria com 'prompts' encontrada no JSON.");
    return;
  }

  category.prompts.sort((a, b) => {
    if (a.prompt_subcategories < b.prompt_subcategories) {
      return -1;
    }
    if (a.prompt_subcategories > b.prompt_subcategories) {
      return 1;
    }
    return 0;
  });

  // Exibir o resultado ordenado
  console.log(data);

  // Opcionalmente, escreva o resultado ordenado de volta no arquivo JSON
  fs.writeFile(
    "./data/midjourney.json",
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.log("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo JSON ordenado salvo com sucesso!");
      }
    }
  );
}

module.exports = sortPromptsAlphabetically;
