import { IPromo } from "../interface";
import { addPromo } from "./promoAdd";

export function appendPromo(value: string, promocodes: IPromo):void {
  const body = document.querySelector('.checkout__body');


  const promoBody = document.createElement('div');
  promoBody.classList.add('promo__body')

  const promoName = document.createElement('span');
  promoName.classList.add('promo__name');
  promoName.innerText = value;

  const promoPercent = document.createElement('span');
  promoPercent.classList.add('promo__percent');
  promoPercent.innerText = `${promocodes[value]}%`;

  const promoButton = document.createElement('button');
  promoButton.classList.add('promo__button');
  promoButton.innerText = 'Add';
  promoButton.addEventListener('click', addPromo);

  promoBody.append(promoName, promoPercent, promoButton);
  body?.append(promoBody);
}