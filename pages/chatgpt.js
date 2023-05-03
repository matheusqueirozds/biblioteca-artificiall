import React from "react";
import Head from "next/head";
import Main from "@/components/Global/Main/EmContrucao";

export default function SobreChatGPT() {
	return (
		<>
			<Head>
				<title>Sobre o ChatGPT</title>
				<meta name="description" content="Página sobre o ChatGPT" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Sobre o ChatGPT</h1>
			<Main/>
		</>
	);
}
