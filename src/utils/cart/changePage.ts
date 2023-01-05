import { addRouter } from "../../routes/routes";
import { ICartProducts } from "../interface";

export function changePage(e: Event): void {
  const target = e.target as HTMLElement;
  if (target.classList.contains('pagination__controller__btn_left')) decrease();
  else if (target.classList.contains('pagination__controller__btn_right')) increase();
  const hash: string = window.location.hash;
  addRouter(hash); 

  function decrease():void {
    const page = JSON.parse(window.localStorage.getItem('currentPage') as string);
    if (page === 1) return;
    const newPage = page - 1;
    window.localStorage.setItem('currentPage', newPage.toString());
  }

  function increase():void {
    const page = JSON.parse(window.localStorage.getItem('currentPage') as string);
    const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
    const length = items.length;
    const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);

    if (page === Math.ceil(length / itemsOnPage)) return;
    const newPage = page + 1;
    window.localStorage.setItem('currentPage', newPage.toString());
  }
}