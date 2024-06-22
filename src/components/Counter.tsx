import { useAtom } from "jotai";
import { counterAtom } from "../stores/counter";
import { Button } from "./ui/button";

export default function () {
	const [counter, setCounter] = useAtom(counterAtom);
	return (
		<div>
			<p>We're at {counter}</p>

			<div className="flex flex-row gap-1">
				<Button type="button" onClick={() => setCounter(counter + 1)}>
					Increment
				</Button>

				<Button type="button" onClick={() => setCounter(counter - 1)}>
					Decrement
				</Button>
			</div>
		</div>
	);
}
