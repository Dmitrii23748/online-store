import { IProducts } from "../interface";
import { updateItemsCount } from "../updateItemsCount";

export function deleteFromStorage(id: number): void {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  const target = findItemInStorage(id, currentItems);
  currentItems.splice(target, 1);
  window.localStorage.setItem('itemList', JSON.stringify(currentItems));
  updateItemsCount();
}

function findItemInStorage(id:number, items: Array<IProducts>): number {
  let number = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) number = i;
  }
  return number;
}