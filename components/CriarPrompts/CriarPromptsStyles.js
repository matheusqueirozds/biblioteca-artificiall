import styled, { css } from "styled-components";

const BaseDiv = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 40px;
	background-color: #e9e9e9;
	border-radius: 8px;
	min-height: 272px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const BASE_COLOR = "#e9e9e9";
const HOVER_COLOR = "#bcbcbc";
const FIELD_BASE = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #d3d3d3;
	height: max-content;
	padding: 20px;
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	transition: all 0.2s;
	opacity: 0.9;

	input {
		background-color: red;
	}

	&:hover {
		opacity: 1;
	}

	&.active {
		background-color: ${HOVER_COLOR};
		color: #5e5e5e;
		opacity: 1;
	}

	label {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;

		&::before {
			display: inline-block;
			content: "";
			width: 20px;
			height: 20px;
		}
	}

	div {
		display: none;
		transition: all 0.3s;
	}

	&.active {
		div {
			display: block;
			position: absolute;
			bottom: -50px;
			left: 0;
			border-radius: 4px;
			width: 100%;
		}
	}

	select {
		height: 100%;
		padding: 10px;
		width: 100%;
		border: none;
		border-radius: 4px;
		background-color: #d3d3d3;
	}

	input {
		position: absolute;
		bottom: 25px;
		background-color: #d3d3d3;
		height: 100%;
		width: 100%;
	}

	&.version {
		label::before {
			background: url("./version.svg") no-repeat;
		}
	}

	&.aspectRatio {
		label::before {
			background: url("./aspect-ratio.svg") no-repeat;
		}

		div {
			display: flex;
			align-items: center;
			gap: 5px;
			select {
				width: 100%;
			}
		}
	}

	&.stylize {
		label::before {
			background: url("./stylize.svg") no-repeat;
		}
	}

	&.chaos {
		label::before {
			background: url("./chaos.svg") no-repeat;
		}
	}
`;

const BaseInput = css`
	outline: none;
	border: none;
	width: 100%;
	padding: 33px 20px;
	border-radius: 8px;
	border: 1px solid #e9e9e9;
	font-size: 16px;
	background-color: #fff;

	&::placeholder {
		font-size: 16px;
		opacity: 0.6;
	}

	&.blue {
		&:focus {
			background-color: #e3eef9;
			outline: 1px solid #197ef4;
			border-color: #89bcf7;

			&::placeholder {
				color: #197ef4;
			}
		}
	}

	&.red {
		&:focus {
			background-color: #f7e5e5;
			outline: 1px solid #dc2626;
			border-color: #eb9090;

			&::placeholder {
				color: #dc2626;
			}
		}
	}
`;

export const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1024px;
	height: 100vh;
	margin: 0 auto;
`;

export const PromptContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #fff;
	padding: 0 20px 20px;
	border-radius: 8px;
	border: 1px solid #eaeaea;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	color: #7d7d7d;
	margin-bottom: 40px;

	span {
		margin: 40px 20px;
		word-wrap: break-word;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		position: initial;
	}
`;

export const TabContainer = styled.div`
	display: flex;
	margin-left: 60px;
`;

export const Tab = styled.div`
	padding: 10px 20px;
	border-radius: 8px 8px 0 0;
	cursor: pointer;
	background-color: ${({ active }) => (active ? BASE_COLOR : "transparent")};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	&::before {
		display: inline-block;
		content: "";
		width: 20px;
		height: 20px;
	}

	&.texto {
		&::before {
			background: url("./text.svg") no-repeat;
			background-position: center;
		}
	}

	&.parametros {
		&::before {
			background: url("./parameters.svg") no-repeat;
			background-position: center;
		}
	}

	&.imagens {
		&::before {
			background: url("./images.svg") no-repeat;
			background-position: center;
		}
	}
`;

export const TextoDiv = styled.div`
	${BaseDiv}
`;

export const InputField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	input {
		${BaseInput}
	}
`;

export const Button = styled.button`
	background-color: ${(props) => props.color};
	color: #fff;
	padding: 11px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	position: absolute;
	right: 20px;

	&::before {
		display: inline-block;
		content: "";
		width: 20px;
		height: 20px;
	}

	&.clear,
	&.clearClicked {
		background-color: #dc2626;

		&::before {
			background: url("./trash.svg");
		}
	}

	&.copy,
	&.copyClicked {
		background-color: #197ef4;

		&::before {
			background: url("./copy-alt.svg");
		}
	}

	&.include,
	&.includeClicked {
		background-color: #197ef4;

		&::before {
			background: url("./add.svg");
		}
	}

	&.exclude,
	&.excludeClicked {
		background-color: #dc2626;

		&::before {
			background: url("./del.svg");
		}
	}

	&.addLink,
	&.addLinkClicked {
		background-color: #197ef4;

		&::before {
			background: url("./add.svg");
		}
	}

	&.clearClicked::before,
	&.copyClicked::before,
	&.includeClicked::before,
	&.excludeClicked::before,
	&.addLinkClicked::before {
		background: url("./check.svg");
		background-position: center;
	}
`;

export const ParametrosDiv = styled.div`
	${BaseDiv}
	flex-direction: row;
`;

export const SelectField = styled.div`
	${FIELD_BASE}
`;

export const SliderField = styled.div`
	${FIELD_BASE}
`;

export const ImagensDiv = styled.div`
	${BaseDiv}
`;
