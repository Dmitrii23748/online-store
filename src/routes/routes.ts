import { page } from "..";
import { addMainPage } from "../pages/main/main-page";
import { addCartPage } from "../pages/cart/Cart-page";
import { addErrorPage } from "../pages/404/Not-found-page";
import { addDescriptionPage } from "../pages/description-prod/description-page";
import { listenerHrefId } from "../utils/listenerHrefId";
import { addUrlLocal } from "../utils/addUrlParams";


export const addRouter = (route: string) => {
    const idHref = listenerHrefId();    
    page.innerHTML = '';

    // addUrlLocal();

    let tableLoc = localStorage.getItem('table') || '';
    switch (route) {
        case '#/':
            return page.append(addMainPage());
        case `#/${tableLoc}`:
            return page.append(addMainPage());
        case `#/${tableLoc}&sort=${localStorage.getItem('sortOption')}`:
            return page.append(addMainPage());
        case '#/cart':
            return page.append(addCartPage());
        case `#/products/${idHref}`:
            return page.append(addDescriptionPage());
        default:
            return page.append(addErrorPage());
    }
}