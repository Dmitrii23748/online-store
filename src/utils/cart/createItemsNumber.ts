import { IProducts } from "../interface";
import { addRouter } from "../../routes/routes";

export function createItemsNumber(items: Array<IProducts>): HTMLElement {
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

  const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);
  itemsController.value = itemsOnPage;
  itemsController.addEventListener('input', updateItemsCount);

  limitControllers.append(limitTitle, itemsController);
  
  return limitControllers;
}

function updateItemsCount(event: Event): void {
  const node = event.target as HTMLInputElement;
  const value = node.value;
  window.localStorage.setItem('itemsOnPage', value);
  const hash: string = window.location.hash;
  addRouter(hash); 
}