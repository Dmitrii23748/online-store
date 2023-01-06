import { changePage } from "./changePage";

export function createPageButtons(): HTMLElement {
  const paginator = document.createElement('div');
  paginator.classList.add('pagination__controller');

  const pagTitle = document.createElement('span');
  pagTitle.classList.add('pagination__controller__title')
  pagTitle.innerText = 'Page:'

  const buttonLeft = document.createElement('button');
  buttonLeft.classList.add('pagination__controller__btn_left')
  buttonLeft.addEventListener('click', changePage);

  const buttonRight = document.createElement('button');
  buttonRight.classList.add('pagination__controller__btn_right')
  buttonRight.addEventListener('click', changePage);

  const pageCount = document.createElement('span');
  pageCount.classList.add('pagination__controller__pages');

  const page = JSON.parse(window.localStorage.getItem('currentPage') as string);
  pageCount.innerText = page;

  paginator.append(pagTitle, buttonLeft, pageCount, buttonRight);
  return paginator;
}