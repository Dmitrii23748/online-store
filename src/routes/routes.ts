import { page } from "..";
import { addMainPage } from "../pages/main/main-page";
import { addCartPage } from "../pages/cart/Cart-page";
import { addErrorPage } from "../pages/404/Not-found-page";
import { addDescriptionPage } from "../pages/description-prod/description-page";
import { listenerHrefId } from "../utils/listenerHrefId";


export const addRouter = (route: string) => {
    const idHref = listenerHrefId();
    page.innerHTML = '';

    localStorage.setItem('hash', `${window.location.hash}`);
    
    switch (route) {
        case '#/':
            return page.append(addMainPage());
        case '#/?table=small':
            return page.append(addMainPage());
        case '#/?table=big':
            return page.append(addMainPage());
        // case '#/?table=big':
        //     return page.append(addMainPage());
        case '#/cart':
            return page.append(addCartPage());
        case `#/products/${idHref}`:
            return page.append(addDescriptionPage());
        default:
            return page.append(addErrorPage());
    }
}