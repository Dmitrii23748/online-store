import { addNavigate } from "../Navigation/Navigation-component";
import { addTotalPrice } from "../Total-price/Total-price";

export const createBlockNavigation = () => {
    const divContainer: HTMLDivElement = document.createElement('div');
    const divNav: HTMLDivElement = document.createElement('div');

    divContainer.classList.add('container');
    divNav.classList.add('block-navigate');

    const nav = addNavigate();
    const totalPrice = addTotalPrice();

    divNav.append(nav);
    divContainer.append(divNav, totalPrice.divPriceBlock);

    return divContainer;
}