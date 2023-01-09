import { addPromo } from "./promoAdd";

export function deletePromo(e: Event):void {
  const target = e.target as HTMLElement;
  target.innerText = 'Add';
  target.removeEventListener('click', deletePromo);
  target.addEventListener('click', addPromo);

  const promoName = target.previousSibling?.previousSibling?.textContent as string;

  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  const promoID = usedPromo.indexOf(promoName);
  const newUsedPromo = usedPromo.length === 2 ? promoID === 0 ? [usedPromo[1]] : [usedPromo[0]] : [];
  window.localStorage.setItem('usedPromo', JSON.stringify(newUsedPromo));

}