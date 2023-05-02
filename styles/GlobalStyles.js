import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.bodyText};
    line-height: 1.6;
    ::-webkit-scrollbar{
      display: none;
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.linkColor};
    transition: color 0.3s;
    opacity: .9;


&:hover {
opacity: 1;
}}

  button {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    transition: background-color 0.3s, color 0.3s;
	  transition: all 0.3s ease;
    padding: 0.25rem 0.5rem;
	  border: none;
	  border-radius: 4px;
    cursor: pointer;
    opacity: .9;

    &:hover {
		transform: translateY(-3px);
    opacity: 1;
  }}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;