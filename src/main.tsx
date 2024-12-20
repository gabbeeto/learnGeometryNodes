import {createRoot} from 'react-dom/client';
import Header from './Header'
import React from 'react';

import N1 from './pages/Page1';

declare global {
	interface Window {lang: string;}
}


declare global {
	interface Window {blenderVersion: string;}
}

window.lang = navigator.language.startsWith("es") ? 'es' : "en"
window.blenderVersion = '4';


let hash: string | number = window.location.hash;
hash = hash.substring(1)


let pages: { [key: string]: JSX.Element } = {
	1: <N1/>,
}






export function renderEverything() {

	createRoot(document.getElementById('root')!).render(
		<>
			<Header></Header>
			<main>
				{pages[hash]}
			</main>
		</>
	)
}


renderEverything();

