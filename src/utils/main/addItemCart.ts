import { db } from "../../db";
import { checkItemInStorage } from "../cart/checkItemInStorage";
import { deleteFromStorage } from "../cart/deleteFromStorage";
import { IProducts } from "../interface";
import { updateHeader } from "../updateHeader";
import { changeButton } from "./changeButton";

export const addItemCart = (event: Event) => {
  const target = event.target as HTMLElement;
  const id: number = calculateID(target);
  const item: IProducts = db.products[id - 1];

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
  return id;
}

function pushInStorage(item: IProducts): void {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string) as Array<IProducts>;
  let newItem = {...item, count: 1};
  currentItems.push(newItem);
  window.localStorage.setItem('itemList', JSON.stringify(currentItems));
  updateHeader();
}