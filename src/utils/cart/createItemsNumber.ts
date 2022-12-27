import { IProducts } from "../interface";

export function createItemsNumber(items: Array<IProducts>): HTMLElement {
  const itemPerPage = document.createElement('span');
  itemPerPage.classList.add('pagination__items-number')
  itemPerPage.innerText = `Items: ${items.length}`;

  return itemPerPage;
}