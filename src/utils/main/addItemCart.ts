import { db } from "../../db";
import { checkItemInStorage } from "../cart/checkItemInStorage";
import { deleteFromStorage } from "../cart/deleteFromStorage";
import { IProducts } from "../interface";
import { updateItemsCount } from "../updateItemsCount";
import { changeButton } from "./changeButton";

export const addItemCart = (event: Event) => {
  const target = event.target as HTMLElement;
  const id: number = calculateID(target);
  const item: IProducts = db.products[id];

  if (checkItemInStorage(id)) {
    deleteFromStorage(id);
  } else {
    pushInStorage(item);
  }
  changeButton(target, id);
}

function calculateID(el: HTMLElement): number {
  const sibling = el.parentNode?.previousSibling as HTMLAnchorElement;
  const idNode = sibling.querySelector('.card-desc__item_ID') as HTMLElement;
  const id = +idNode.innerText;
  console.log(id)
  return id - 1;
}

function pushInStorage(item: IProducts): void {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string) as Array<IProducts>;
  currentItems.push(item)
  window.localStorage.setItem('itemList', JSON.stringify(currentItems));
  updateItemsCount();
}