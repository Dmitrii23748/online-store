import { IProducts } from "./interface";

export function updateItemsCount(): void{
  const span = document.querySelector('.count-prod') as HTMLElement;
  const items: Array<IProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  span.innerText = items.length.toString();
}