import { Promocodes } from "../../components/promocodes";
import { ICartProducts } from "../interface";

export function addDiscount(): void {
  const price = document.querySelector('.checkout__total') as HTMLElement;

  const newPrice = price.cloneNode() as HTMLElement;
  newPrice.classList.add('checkout__total_new');
  const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);

  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  const percent = usedPromo.reduce((acc: number, name: string) => acc + +Promocodes[name], 0);
  
  const oldNewPrice = document.querySelector('.checkout__total_new');
  oldNewPrice?.remove();

  newPrice.innerText =`Total: ${items.reduce((acc, item) => acc + item.price * (100 - +percent) / 100 * item.count, 0)}$`;
  if (!price.classList.contains('slikethrough')) {
    price.classList.add('slikethrough');
  };
  
  price.after(newPrice);
}