import { addCartInfo } from "./addCartInfo";
import { ICartProducts } from "../interface";
import { addCartInner } from "./addCartInner";

export const addCart = (items: Array<ICartProducts>): Array<HTMLElement> => {
  const cartInfo: HTMLElement = document.createElement('div');
  const cartInner: HTMLElement = document.createElement('div');
  cartInfo.classList.add('cart-info')
  cartInner.classList.add('cart-items')

  addCartInfo(cartInfo, items);
  addCartInner(cartInner, items);
  
  return [cartInfo, cartInner];
}