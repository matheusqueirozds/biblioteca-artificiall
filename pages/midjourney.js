import React, { useState } from "react";
import Head from "next/head";
import Main from "@/components/Midjourney/Main/Main";
import data from "@/components/Midjourney/midjourney.json";

export default function Home({ data }) {
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

export async function getStaticProps() {
	return {
		props: {
			data,
		},
	};
}
