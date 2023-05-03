import React from "react";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
`;

export default function EmContrucao() {
	return (
		<Container>
			<div>
				<h1>Página em construção</h1>
				<p>
					Desculpe o transtorno, estamos trabalhando para melhorar esta página.
				</p>
			</div>
		</Container>
	);
}
