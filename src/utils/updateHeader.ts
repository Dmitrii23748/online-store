import { ICartProducts } from "./interface";

export function updateHeader(): void{
  const count = document.querySelector('.count-prod') as HTMLElement;
  const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  const total = document.querySelector('.price-block__span-number') as HTMLElement; 

  count.innerText = items.length.toString();
  total.innerText = `${items.reduce((acc, item) => acc + item.price * item.count, 0)} $`;
};