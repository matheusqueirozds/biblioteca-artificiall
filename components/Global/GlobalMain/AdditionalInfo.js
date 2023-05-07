import Link from "next/link";
import React from "react";
import styled from "styled-components";

// Estilização do container adicional
export const AdditionalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	position: relative;
	top: calc(3.4375rem + 4rem);
	margin: 0 auto;
	max-width: 73.125rem;
	padding: 1rem;
	padding-bottom: calc(6.8125rem + 4rem);
	color: #473c41;

	h1 {
		font-size: 3.375rem;
	}

	h2 {
		font-size: 2.25rem;
	}

	p {
		font-size: 1.125rem;
	}

	a {
		display: flex;
		gap: 0.5rem;
		margin-top: 2rem;
	}

	@media screen and (max-width: 64rem) {
		max-width: 60.75rem;
	}

	@media screen and (max-width: 48rem) {
		max-width: 47rem;

		h1 {
			font-size: 2.7rem;
		}

		h2 {
			font-size: 2.025rem;
		}
	}

	@media screen and (max-width: 30rem) {
		h1 {
			font-size: 2.3625rem;
		}

		h2 {
			font-size: 1.8rem;
		}
	}
`;

// Estilização do wrapper do container
export const ContainerWrapper = styled.div`
	text-align: center;
`;

// Estilização do container de texto
export const TextContainer = styled.div``;

// Componente de informações adicionais
export default function AdditionalInfo({ titulo, subtitulo, paragrafo }) {
	return (
		<TextContainer>
			<h1>{titulo}</h1>
			<h2>{subtitulo}</h2>
			<p>{paragrafo}</p>
		</TextContainer>
	);
}

// Componente para retornar à página inicial
export function BackToHome() {
	return (
		<Link href="/">
			<img src="/arrow-back.svg" alt="Voltar" />
			<span>Voltar para a página inicial</span>
		</Link>
	);
}

// Componente de container genérico
export function Container() {
	return (
		<ContainerWrapper>
			<div>
				<h1>Página em construção</h1>
				<p>Esta página será atualizada em breve!</p>
			</div>
		</ContainerWrapper>
	);
}
