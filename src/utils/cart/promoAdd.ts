import { Promocodes } from "../../components/promocodes";
import { ICartProducts } from "../interface";

export function addPromo(e: Event): void {
  const target = e.target as Node;
  const promoName = target.previousSibling?.previousSibling?.textContent as string;
  
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  usedPromo.push(promoName);
  window.localStorage.setItem('usedPromo', JSON.stringify(usedPromo));

  addDiscount();
}

function addDiscount(): void {
  const price = document.querySelector('.checkout__total') as HTMLElement;
  const newPrice = price.cloneNode() as HTMLElement;
  const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  const percent = usedPromo.reduce((acc: number, name: string) => acc + +Promocodes[name], 0);
  
  newPrice.innerText =`Total: ${items.reduce((acc, item) => acc + item.price * (100 - +percent) / 100 * item.count, 0)}$`;
  price.classList.add('slikethrough');
  price.after(newPrice);
}