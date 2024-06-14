import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// styling & fonts
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";

import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./styling/theme";

// routing
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<RouterProvider router={router} />
			</ThemeProvider>
		</StrictMode>,
	);
}
