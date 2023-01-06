import { addRouter } from "./routes/routes";
import { createBlockNavigation } from "./components/Block-navigation/Block-navigation";
import { updateItemsCount } from "./utils/updateItemsCount";
import { updateHeader } from "./utils/updateHeader";

//CssImport
import './style.scss'

export const rootHeader = document.querySelector('.header') as HTMLElement;
export const page = document.querySelector('.page') as HTMLElement;
export const footer = document.querySelector('.footer');


rootHeader.append(createBlockNavigation());

const hashLOcalStorage = localStorage.getItem('routerPath');

window.addEventListener('hashchange', () => {
    const hash: string = window.location.hash;
    addRouter(hash); 
});

window.addEventListener('DOMContentLoaded', () => {   
    localStorage.setItem('routerPath', '#/');

    addRouter(window.location.hash || '#/');
    if(hashLOcalStorage === null) {
        if(window.location.pathname === '/') {
            window.location.href = '#/';
        };
    } else {
        window.location.href = `${hashLOcalStorage}`;
    }
    updateHeader();
    updateItemsCount();
});




// localStorage.setItem('arrSearch', JSON.stringify(db.products));