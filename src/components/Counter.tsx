import { useAtom } from "jotai";
import { counterAtom } from "../stores/counter";

export default function () {
	const [counter, setCounter] = useAtom(counterAtom);
	return (
		<>
			<p>We're at {counter}</p>

			<button type="button" onClick={() => setCounter(counter + 1)}>
				Increment
			</button>
			<button type="button" onClick={() => setCounter(counter - 1)}>
				Decrement
			</button>
		</>
	);
}
