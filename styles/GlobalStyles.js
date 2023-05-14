import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Valorant";
    src: url("/Valorant-Font.ttf") format("truetype");
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;

    
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fafafa;
    color: #888;
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
    color: inherit;
    transition: all 0.3s;
    opacity: .87;


&:hover {
opacity: 1;
text-decoration:underline;
}}

  button {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
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

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: #2c3357;
    font-weight:600;
  }


  p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;
