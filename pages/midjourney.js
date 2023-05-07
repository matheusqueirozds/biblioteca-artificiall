import React, { useState } from "react";
import Head from "next/head";
import Main from "@/components/Midjourney/Main/Main";
import data from "@/components/Midjourney/midjourney.json";

// Componente principal da página Midjourney
export default function Midjourney({ data }) {
	// Estado local para armazenar os prompts filtrados
	const [filteredPrompts, setFilteredPrompts] = useState([]);

	return (
		<>
			<Head>
				<title>Biblioteca Artificiall</title>
				<meta
					name="description"
					content="Biblioteca de prompts para criação de conteúdo"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main
				data={data}
				filteredPrompts={filteredPrompts}
				setFilteredPrompts={setFilteredPrompts}
			/>
		</>
	);
}

// Função para obter dados estáticos durante a construção do site
export async function getStaticProps() {
	return {
		props: {
			data,
		},
	};
}
