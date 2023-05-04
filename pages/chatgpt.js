import React from "react";
import Head from "next/head";
import { Container } from "@/components/Global/Main/AdditionalInfo";

export default function ChatGPT() {
	return (
		<>
			<Head>
				<title>Sobre o ChatGPT</title>
				<meta name="description" content="Página sobre o ChatGPT" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Sobre o ChatGPT</h1>
			<Container />
		</>
	);
}
