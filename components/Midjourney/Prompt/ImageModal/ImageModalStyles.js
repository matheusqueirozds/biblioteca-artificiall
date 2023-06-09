import styled from "styled-components";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	display: flex;
	position: relative;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 4px;
	max-width: 90vw;
	max-height: 90vh;
	overflow: auto;
	z-index: 1000;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-family: monospace;
	font-size: 1.5rem;
	background-color: #e74c3c;
	color: #fff;
	width: 40px;
	height: 40px;
	opacity: 1;
`;

export const Image = styled.img`
	max-height: calc(100vh - 6rem);
	object-fit: cover;
`;
