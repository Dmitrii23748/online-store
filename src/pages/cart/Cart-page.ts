import { checkEmpty } from "../../utils/cart/checkEmpty";
import { addItemList } from "../../utils/cart/addItemList";
import { IDB, IProducts } from "../../utils/interface";

export const addCartPage = (): HTMLElement => {
  const wrapperCart: HTMLElement = document.createElement('div');

  const items: Array<IProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  if (checkEmpty(items)) {
    wrapperCart.textContent = 'Cart is empty';
    return wrapperCart;
  }

  const itemList: HTMLElement = document.createElement('section');
  const checkout: HTMLElement = document.createElement('aside');
  itemList.append(addItemList(items));
  wrapperCart.append(itemList)
  return wrapperCart;
}