import { ICartProducts } from "../interface";
import { updateItemsCount } from "../updateItemsCount";
import { addRouter } from "../../routes/routes";

export function updateCart(target: Event) {
  const node = event?.target as HTMLElement;
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  const id: number = findId(node, currentItems);

  if (node.className === 'item__controls__buttons_left') {
    decreaseAmount(id, currentItems);
  } else if ((node.className === 'item__controls__buttons_right')){
    increaseAmount(id, currentItems);
  }

  updateItemsCount();
  const hash: string = window.location.hash;
  addRouter(hash); 
}

function findId(node: HTMLElement, currentItems: Array<ICartProducts>): number {
  const parentNode = node.parentNode as HTMLElement;
  const idNode = parentNode.querySelector('.card-desc__item_ID') as HTMLElement;
  const id: number = +idNode.innerText;
  
  let currentCount: number = 0;

  for (let i = 0; i < currentItems.length; i++) {
    if (currentItems[i].id == id) currentCount = i;
  }

  return currentCount;
}

function decreaseAmount(id: number, currentItems: Array<ICartProducts>): void {
  let count: number = currentItems[id].count;

  if (count === 1) {
    currentItems.splice(id, 1);
  } else {
    currentItems[id].count -= 1;
  }

  window.localStorage.setItem('itemList', JSON.stringify(currentItems));
}

function increaseAmount(id: number, currentItems: Array<ICartProducts>): void {
  currentItems[id].count += 1;
  window.localStorage.setItem('itemList', JSON.stringify(currentItems));
}