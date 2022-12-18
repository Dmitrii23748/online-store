import { IDB, db } from "../../db";

export const addCartPage = () => {
  const wrapperCart = document.createElement('div');

  if (checkEmpty()) {
    wrapperCart.textContent = 'Cart is empty'
  }

  const itemList = document.createElement('section');
  const checkout = document.createElement('aside');

  itemList.append(addItemList())
  return wrapperCart;
}

//Проверяет внешнее хранилище на предмет отложенных вещей
const checkEmpty = () => {
  let num = Math.random();
  return num >= 0.5 ? true : false
} 

//Наполняем корзину итемами
const addItemList = () => {
  const items = getItems(db);
  const cartInfo = document.createElement('div');
  const cartInner = document.createElement('div');

  addCartInfo(cartInfo, items)
}

//Получаем список отложенных итемов
const getItems = (path: IDB) => {
  const length = path.total > 3 ? 3 : path.total;
  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(path.products[i]);
  }
  return items;
}

const addCartInfo = (node: HTMLElement, items) => {
  const cartTitle: HTMLElement = document.createElement('span');
  const controllers = document.createElement('div');

  cartTitle.innerText = 'Products In Cart';
  addControlers();

  function addControlers() {
    const itemPerPage = document.createElement('span');
    itemPerPage.innerText = `Items: ${items.length}`
  }
}

