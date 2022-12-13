import { page } from "..";
import { addMainPage } from "../pages/main/main";
import { addCartPage } from "../pages/cart/cart";
import { addErorPage } from "../pages/404/404";


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