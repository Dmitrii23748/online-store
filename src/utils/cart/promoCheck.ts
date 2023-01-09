import { IPromo } from "../interface";
import { appendPromo } from "./promoAppend";

export function checkPromo(e: Event):void {
  const target = e.target as HTMLInputElement;
  const value: string = target.value;
  const promocodes: IPromo = JSON.parse(window.localStorage.getItem('promocodes') as string);
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);

  if(promocodes[value] && !usedPromo.includes(value)) {
    appendPromo(value, promocodes)}
  else {
    const promo = document.querySelector('.promo__body');
    if (!promo?.classList.contains('promo__body_added')){
      promo?.remove();
    }
  }
}