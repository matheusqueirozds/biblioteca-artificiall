import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const AdditionalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	position: relative;
	top: calc(55px + 4rem);
	margin: 0 auto;
	max-width: 1170px;
	padding: 1rem;
	padding-bottom: calc(109px + 4rem);

	h1 {
		font-size: 54px;
	}

	h2 {
		font-size: 36px;
	}

	h4 {
		font-size: 21, 6px;
	}

	p {
		font-size: 18px;
	}

	a {
		display: flex;
		gap: 0.5rem;
		margin-top: 2rem;
	}
`;

export const ContainerWrapper = styled.div`
	text-align: center;
`;

const TextContainer = styled.div``;

export default function AdditionalInfo({ titulo, subtitulo, paragrafo }) {
	return (
		<TextContainer>
			<h1>{titulo}</h1>
			<h2>{subtitulo}</h2>
			<p>{paragrafo}</p>
		</TextContainer>
	);
}

export function BackToHome() {
	return (
		<Link href="/">
			<img src="/arrow-back.svg" alt="" />
			<span>Voltar para a página inicial</span>
		</Link>
	);
}

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
