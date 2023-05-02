import styled from "styled-components";

export const HomeContainer = styled.div`
	background-color: #ffffff;
	color: ${({ theme }) => theme.bodyText};
	min-height: calc(100vh - 3rem);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem;
	text-align: center;
`;

export const Logo = styled.img`
	width: 200px;
	margin-bottom: 2rem;
`;

export const RadioOptions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;

	label {
		font-size: 1rem;
		display: flex;
		align-items: center;
		margin: 0 1rem;
		cursor: pointer;
	}

	input[type="radio"] {
		margin-right: 0.5rem;
		cursor: pointer;
	}
`;
