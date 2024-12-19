import {createRoot} from 'react-dom/client';
import Header from './Header'

declare global {
	interface Window {lang: string;}
}


declare global {
	interface Window {blenderVersion: string;}
}

window.lang = navigator.language.startsWith("es") ? 'es' : "en"
window.blenderVersion = '4';


export  function renderEverything() {

	createRoot(document.getElementById('root')!).render(
		<>
			<Header></Header>
			<p>Hi, I'm Gabbeeto. I'm making this book for people who are decent enough to create stuff in object|edit|sculpting mode in the default way of doing art(the so-call 'destructive way' that beginners usually learn when they start learning about blender), if you don't have the foundation and you don't know how to deal with blender materials or are not free enough to create whatever you want outside of Geometry nodes, this book is not for you. this book is for you if you are intimidated about Geometry nodes or intimidated by math but are willing to be patient and surpass your feelings.</p>
		</>
	)
}


renderEverything();

