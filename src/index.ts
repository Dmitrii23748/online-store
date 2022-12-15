import { addRouter } from "./routes/routes";
import { addNavigate } from "./components/Navigation/Navigation-component";


export const root = document.querySelector('#root') as HTMLElement;
export const page = document.querySelector('.page') as HTMLElement;

root.append(addNavigate());

addRouter(window.location.hash || '#/');

window.addEventListener('hashchange', () => {
    const hash: string = window.location.hash;  
    addRouter(hash)
});

