import { renderEverything } from "./main";

function changeBlenderVersion(){
window.blenderVersion = window.blenderVersion == '4' ? '3' : '4';
renderEverything()
}


function changeLanguage(){
window.lang = window.lang == 'es' ? 'en' : 'es'
renderEverything()
}

export default function Header() {
	const buttomStyle: string = "border-black border-2 p-1 rounded-md hover:bg-black hover:border-white hover:text-white";
	return (<header className="flex justify-center items-center gap-2 my-2">
		<h1>Geometry nodes and math for non-mathematical dudes
		</h1>
		<button onClick={changeBlenderVersion} className={buttomStyle}>
			v{window.blenderVersion}</button>
		<button onClick={changeLanguage} className={buttomStyle}>{window.lang}</button>
	</header>)



}
