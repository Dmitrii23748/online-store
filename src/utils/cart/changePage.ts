import { addRouter } from "../../routes/routes";
import { ICartProducts } from "../interface";

export function changePage(e: Event): void {
  const target = e.target as HTMLElement;
  const page = JSON.parse(window.localStorage.getItem('currentPage') as string);

  if (target.classList.contains('pagination__controller__btn_left')) decrease(page);
  else if (target.classList.contains('pagination__controller__btn_right')) increase(page);

  const hash: string = window.location.hash;
  addRouter(hash); 

  function decrease(page: string):void {
    if (Number(page) === 1) return;
    const newPage = Number(page) - 1;
    window.localStorage.setItem('currentPage', newPage.toString());
  }

  function increase(page: string):void {
    const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
    const length = items.length;
    const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);

    if (Number(page) === Math.ceil(length / itemsOnPage)) return;
    const newPage = page + 1;
    window.localStorage.setItem('currentPage', newPage.toString());
  }
}