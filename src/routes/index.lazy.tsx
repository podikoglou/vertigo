import Counter from "@/components/Counter";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Page,
});

function Page() {
	return (
		<div>
			<h1>Hey.</h1>

			<Counter />
		</div>
	);
}
