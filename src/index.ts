import { addRouter } from "./routes/routes";
import { createBlockNavigation } from "./components/Block-navigation/Block-navigation";
import { updateItemsCount } from "./utils/UpdateItemsCount";

export const rootHeader = document.querySelector('.header') as HTMLElement;
export const page = document.querySelector('.page') as HTMLElement;

rootHeader.append(createBlockNavigation());
addRouter(window.location.hash || '#/');

window.addEventListener('hashchange', () => {
    const hash: string = window.location.hash;  
    addRouter(hash);
});

window.addEventListener('load', () => {    
    if(window.location.pathname === '/') {
        window.location.href = '#/';
    };
    updateItemsCount();
});

document.addEventListener('onload', () => {
  
})