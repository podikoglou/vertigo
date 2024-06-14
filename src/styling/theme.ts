import { createGlobalStyle } from "styled-components";

export default {
	fonts: {
		sans: "PT Sans",
	},
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: '${(props) => props.theme.fonts.sans}'
  }
  `;
