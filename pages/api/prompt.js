import fs from "fs";
import path from "path";
import Joi from "joi";

const schema = Joi.object({
	prompt_subcategories: Joi.string().required(),
	prompt_text: Joi.string().required(),
	image_url: Joi.string().uri().required(),
	image_alt: Joi.string().required(),
});

const validatePrompt = (prompt) => {
	const { error } = schema.validate(prompt);
	if (error) {
		throw new Error(
			`Dados inválidos: ${error.details
				.map((detail) => detail.message)
				.join(", ")}`
		);
	}
};

export default function handler(req, res) {
	const apiKey = req.headers["x-api-key"];

	if (!apiKey || apiKey !== process.env.API_KEY) {
		res.status(403).json({ status: "Acesso negado" });
		return;
	}

	if (req.method !== "POST") {
		res.status(405).json({ status: "Método não permitido" });
		return;
	}

	try {
		validatePrompt(req.body);
	} catch (error) {
		res.status(400).json({ status: error.message });
		return;
	}

	try {
		const promptsPath = path.join(process.cwd(), "data/midjourney.json");
		const prompts = JSON.parse(fs.readFileSync(promptsPath, "utf8"));

		prompts.midjourney.daily_prompt = req.body;

		fs.writeFileSync(promptsPath, JSON.stringify(prompts, null, 2));

		res.status(200).json({ status: "Prompt do dia atualizado com sucesso" });
	} catch (error) {
		res
			.status(500)
			.json({ status: "Erro interno do servidor", error: error.message });
	}
}
