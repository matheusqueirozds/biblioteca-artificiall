import React from "react";
import Head from "next/head";
import Main from "../components/Main/Main";
import data from "../midjourney.json";

export default function Home({ data, searchTerm }) {
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
			<Main data={data} searchTerm={searchTerm} />
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
