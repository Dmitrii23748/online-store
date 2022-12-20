import { checkEmpty } from "../../utils/cart/checkEmpty";
import { addCart } from "../../utils/cart/addCart";
import { IDB, IProducts } from "../../utils/interface";

export const addCartPage = (): HTMLElement => {
  const wrapperCart: HTMLElement = document.createElement('div');
  wrapperCart.classList.add('wrapper_cart')

  const items: Array<IProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  if (checkEmpty(items)) {
    wrapperCart.textContent = 'Cart is empty';
    return wrapperCart;
  }

  const itemList: HTMLElement = document.createElement('section');
  const checkout: HTMLElement = document.createElement('aside');

  itemList.classList.add('item-list');
  checkout.classList.add('checkout');

  itemList.append(...addCart(items));

  wrapperCart.append(itemList)
  return wrapperCart;
}