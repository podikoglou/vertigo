import { useAtom } from "jotai";
import { counterAtom } from "../stores/counter";

export default function () {
	const [counter, setCounter] = useAtom(counterAtom);
	return (
		<div>
			<p>We're at {counter}</p>

			<div className="flex flex-row gap-1">
				<button type="button" onClick={() => setCounter(counter + 1)}>
					Increment
				</button>

				<button type="button" onClick={() => setCounter(counter - 1)}>
					Decrement
				</button>
			</div>
		</div>
	);
}
