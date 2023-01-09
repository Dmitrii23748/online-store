import { ICartProducts } from "../interface";
import { addRouter } from "../../routes/routes";

export function createItemsNumber(): HTMLElement {
  const limitControllers = document.createElement('div');
  limitControllers.classList.add('pagination__limit')

  const limitTitle = document.createElement('span');
  limitTitle.classList.add('pagination__limit__title')
  limitTitle.innerText = 'Limit:';

  const itemsController = document.createElement('input');
  itemsController.classList.add('pagination__limit__controller')
  itemsController.type = 'number';
  itemsController.min = '1';
  itemsController.max = '5';
  itemsController.addEventListener('input', checkInput);

  const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);
  itemsController.value = itemsOnPage;
  itemsController.addEventListener('input', updateItemsCount);

  limitControllers.append(limitTitle, itemsController);
  
  return limitControllers;
}

function updateItemsCount(event: Event): void {
  const node = event.target as HTMLInputElement;
  const value: number = Number(node.value);
  window.localStorage.setItem('itemsOnPage', value.toString());

  const items: Array<ICartProducts> = JSON.parse(window.localStorage.getItem('itemList') as string);
  const page = JSON.parse(window.localStorage.getItem('currentPage') as string);
  const maxPage = Math.ceil(items.length / value);
  if (maxPage < page) window.localStorage.setItem('currentPage', maxPage.toString());

  const hash: string = window.location.hash;
  addRouter(hash); 
}

function checkInput(e: Event):void {
  const target = e.target as HTMLInputElement;
  if (+target.value < 1) {
    target.classList.add('.pagination__limit__controller_error');
    target.value = '1';
  }
  if (+target.value > 5) {
    target.classList.add('.pagination__limit__controller_error');
    target.value = '5';
  }
  setTimeout((target) => target.classList.remove('.pagination__limit__controller_error'), 2000);
}