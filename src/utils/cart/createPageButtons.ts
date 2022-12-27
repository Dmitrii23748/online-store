import { IProducts } from "../interface";

export function createPageButtons(items: Array<IProducts>): HTMLElement {
  const paginator = document.createElement('div');
  paginator.classList.add('pagination__controller');

  const pagTitle = document.createElement('span');
  pagTitle.classList.add('pagination__controller__title')
  pagTitle.innerText = 'Page:'

  const buttonLeft = document.createElement('button');
  buttonLeft.classList.add('pagination__controller__btn_left')

  const buttonRight = document.createElement('button');
  buttonRight.classList.add('pagination__controller__btn_right')

  const pageCount = document.createElement('span');
  pageCount.classList.add('pagination__controller__pages');
  pageCount.innerText = `1`

  paginator.append(pagTitle, buttonLeft, pageCount, buttonRight);
  return paginator 
}