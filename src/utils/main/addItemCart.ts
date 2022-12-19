import { db } from "../../db";
import { IProducts } from "../interface";

export const addItemCart = (event: Event) => {
  const target = event.target as HTMLElement;
  const id = calculateID(target);
  const item: IProducts = db.products[id];

  pushItem(item)
}

function calculateID(el: HTMLElement): number {
  let sibling = el.parentNode?.previousSibling as HTMLAnchorElement;
  let link: string = sibling.href;
  let id: number = +link.slice(link.lastIndexOf('products/') + 9);
  return id - 1;
}

function pushItem(item: IProducts): void {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string) as Array<IProducts>;
  if (currentItems == null) {
    const newItem: string = JSON.stringify([item]);
    window.localStorage.setItem('itemList', newItem);
  } else {
    currentItems.push(item)
    window.localStorage.setItem('itemList', JSON.stringify(currentItems));
  }
}