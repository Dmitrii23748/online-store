import { page } from "..";
import { addMainPage } from "../pages/main/main-page";
import { addCartPage } from "../pages/cart/Cart-page";
import { addErorPage } from "../pages/404/Not-found-page";
import { addDescriptionPage } from "../pages/description-prod/description-page";
import { listenerHrefId } from "../utils/listenerHrefId";
import { deleteUrlParams } from "../utils/addUrlParams";


export const addRouter = (route: string) => {
    if(window.location.search === '?table=small'){
        deleteUrlParams('table');
    }

    
    const idHref = listenerHrefId();
    page.innerHTML = '';
    switch (route) {
        case '#/':
            return page.append(addMainPage());
        case '#/cart':
            return page.append(addCartPage());
        case `#/products/${idHref}`:
            return page.append(addDescriptionPage());
        default:
            return page.append(addErorPage());
    }
}