import { IProducts } from "../interface";

export function createPageButtons(items: Array<IProducts>): HTMLElement {
  const paginator = document.createElement('div');
  paginator.classList.add('paginator');

  const pagTitle = document.createElement('span');
  pagTitle.classList.add('paginator_title')
  pagTitle.innerText = 'Page:'

  const buttonLeft = document.createElement('button');
  buttonLeft.classList.add('paginator_btn-left')

  const buttonRight = document.createElement('button');
  buttonRight.classList.add('paginator_btn-right')

  const pageCount = document.createElement('span');
  pageCount.classList.add('paginator_page-count');
  pageCount.innerText = `1`

  paginator.append(pagTitle, buttonLeft, pageCount, buttonRight);
  return paginator 
}