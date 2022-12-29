import { addRouter } from "./routes/routes";
import { createBlockNavigation } from "./components/Block-navigation/Block-navigation";
import { updateHeader } from "./utils/updateHeader";

//CssImport
import './style.scss'


export const rootHeader = document.querySelector('.header') as HTMLElement;
export const page = document.querySelector('.page') as HTMLElement;


rootHeader.append(createBlockNavigation());


window.addEventListener('hashchange', () => {
    const hash: string = window.location.hash;
    addRouter(hash); 
});

window.addEventListener('DOMContentLoaded', () => {    
    addRouter(window.location.hash || '#/');
    if(window.location.pathname === '/') {
        window.location.href = '#/';
    };
    updateHeader();
});