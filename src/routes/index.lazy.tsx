import Counter from "@/components/Counter";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Page,
});

function Page() {
	return (
		<div className="container">
			<h1 className="text-4xl">Hey.</h1>

			<Counter />
		</div>
	);
}
