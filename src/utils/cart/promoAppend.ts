import { IPromo } from "../interface";
import { addPromo } from "./promoAdd";
import { deletePromo } from "./promoDelete";

export function appendPromo(value: string, promocodes: IPromo, node: HTMLElement):void {
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);

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
  if (!usedPromo.includes(value)) {
    promoButton.innerText = 'Add';
    promoButton.addEventListener('click', addPromo);
  } else {
    promoButton.innerText = 'Delete';
    promoButton.addEventListener('click', deletePromo);
  }

  promoBody.append(promoName, promoPercent, promoButton);
  console.log(promoBody)
  node?.append(promoBody);
}