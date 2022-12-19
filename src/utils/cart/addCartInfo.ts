import { IProducts } from "../interface";
import { createItemsNumber } from "./createItemsNumber";
import { createPageButtons } from "./createPageButtons";

export const addCartInfo = (node: HTMLElement, items: Array<IProducts>): void => {
  const cartTitle: HTMLElement = document.createElement('span');
  const controllers: HTMLElement = document.createElement('div');
  controllers.classList.add('pagination');

  cartTitle.innerText = 'Products In Cart';

  // убрать  потом
  const cartInner = document.createElement('div');
  cartInner.innerText = JSON.stringify(items);

  controllers.append(createItemsNumber(items));
  controllers.append(createPageButtons(items));

  node.append(cartTitle, controllers, cartInner)
}