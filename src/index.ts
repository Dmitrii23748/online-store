import { addRouter } from "./routes/routes";
import { createBlockNavigation } from "./components/Block-navigation/Block-navigation";


export const root = document.querySelector('#root') as HTMLElement;
export const page = document.querySelector('.page') as HTMLElement;

root.append(createBlockNavigation());

addRouter(window.location.hash || '#/');

window.addEventListener('hashchange', () => {
    const hash: string = window.location.hash;  
    addRouter(hash)
});

