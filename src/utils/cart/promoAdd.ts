import { addDiscount } from "./promoAddDiscount";
import { deletePromo } from "./promoDelete";

export function addPromo(e: Event): void {
  const target = e.target as HTMLElement;
  target.innerText = 'Delete';
  target.removeEventListener('click', addPromo);
  target.addEventListener('click', deletePromo);

  const promoName = target.previousSibling?.previousSibling?.textContent as string;
  
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  usedPromo.push(promoName);
  window.localStorage.setItem('usedPromo', JSON.stringify(usedPromo));

  addDiscount();
}