import { page } from "..";
import { addMainPage } from "../pages/main/main-page";
import { addCartPage } from "../pages/cart/Cart-page";
import { addErorPage } from "../pages/404/Not-found-page";


export const addRouter = (route: string) => {
    page.innerHTML = '';
    switch (route) {
        case '#/':
            return page.append(addMainPage());
        case '#/cart':
            return page.append(addCartPage());
        default:
            return page.append(addErorPage());
    }
}