import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// styling & fonts
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";

import "@/globals.css";

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
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
