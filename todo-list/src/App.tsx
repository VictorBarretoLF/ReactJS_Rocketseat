import { useState } from "react";
import todoLogo from "./assets/logo.svg";
import "./styles/global.css";
import { Icons } from "./components/icons";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<header className="h-48 flex justify-center items-center bg-gray-700">
				<img src={todoLogo} alt="todo logo" />
			</header>

			<main className="">
				<div>
					<form>
						<div className="flex gap-2 justify-center -translate-y-2/4">
							<div>
								<label className="sr-only" htmlFor="todo">
									Todo
								</label>
								<input
									id="todo"
									type="text"
									className="h-12 w-[39rem] px-4 text-gray-300 text-base"
								/>
							</div>
							<button className="bg-blue flex gap-2 items-center justify-center w-20">
								<p className="text-white">Criar</p>
								<Icons.plus className="text-white w-6 h-6" />
							</button>
						</div>
					</form>
				</div>
				<div></div>
			</main>
		</div>
	);
}

export default App;
