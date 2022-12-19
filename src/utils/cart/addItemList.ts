import { addCartInfo } from "./addCartInfo";
import { IDB, IProducts } from "../interface";
import { addCartInner } from "./addCartInner";

export const addItemList = (items: Array<IProducts>): Node => {
  const cartInfo: HTMLElement = document.createElement('div');
  const cartInner: HTMLElement = document.createElement('div');

  addCartInfo(cartInfo, items);
  addCartInner(cartInner, items);
  return cartInfo 
}