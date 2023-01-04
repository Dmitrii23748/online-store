import { ICartProducts, IProducts } from "../interface";
import { updateCart } from "./updateCart";

export function addCartInner(node: HTMLElement, items: Array<ICartProducts>, page: number):void  {
  const itemCount = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);
  const length = items.length;
  const start: number = (page - 1) * itemCount;
  let end: number = page * itemCount;
  if (length < end) end = length;
  for (let i = start; i < end; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    
    const num: HTMLElement = createNum(i);

    const img: HTMLElement = createImage(i, items);

    const description: HTMLElement = createDescription(i, items);

    const controls: HTMLElement = createControls(i, items);

    item.append(num,img, description, controls);
    node.append(item)
  }
}

function createNum(i: number): HTMLElement {
  const num = document.createElement('div');
  num.classList.add('item__number');
  num.innerText = (i+1).toString();
  return num;
}

function createImage(i: number, items: Array<ICartProducts>): HTMLElement {
    const img = document.createElement('div');
    img.classList.add('item__img-container');

    const img_src = document.createElement('img');
    img_src.classList.add('item__image');

    img_src.src = items[i].images[0];
    img_src.alt = items[i].title;
    img.append(img_src);

    return img;
}

function createDescription(i: number, items: Array<IProducts>): HTMLElement {
  const desc = document.createElement('div');
  desc.classList.add('item__description');

  let descTitle = document.createElement('p');
  descTitle.classList.add('item__description__title');
  descTitle.innerText = items[i].title;

  let descDivider = document.createElement('div');
  descDivider.classList.add('item__description__divider');

  let descDescription = document.createElement('div');
  descDescription.classList.add('item__description__description');
  descDescription.innerText = items[i].description;

  let descRating = document.createElement('span');
  descRating.classList.add('item__description__rating');
  descRating.innerText = `Rating: ${items[i].rating}`;

  let descDiscount = document.createElement('span');
  descDiscount.classList.add('item__description__discount');
  descDiscount.innerText = `Discount: ${items[i].discountPercentage}%`;

  desc.append(descTitle, descDivider, descDescription, descRating, descDiscount)
  return desc
}

function createControls(i: number, items: Array<ICartProducts>): HTMLElement {
  const controls = document.createElement('div');
  controls.classList.add('item__controls');

  let stock = document.createElement('p');
  stock.classList.add('item__controls__stock');
  stock.innerText = `Stock: ${items[i].stock}`;

  let btnsWrapper = document.createElement('div');
  btnsWrapper.classList.add('item__controls__buttons');

  let leftBtn = document.createElement('button');
  leftBtn.classList.add('item__controls__buttons_left');
  leftBtn.addEventListener('click', updateCart);
  
  let rightBtn = document.createElement('button');
  rightBtn.classList.add('item__controls__buttons_right');
  rightBtn.addEventListener('click', updateCart);

  let itemsCount = document.createElement('span');
  itemsCount.classList.add('item__controls__count');
  itemsCount.innerText = `${items[i].count}`;

  let itemID = document.createElement('span');
  itemID.classList.add('card-desc__item_ID');
  itemID.innerText = `${items[i].id}`;

  btnsWrapper.append(leftBtn, itemsCount, rightBtn, itemID);

  let price = document.createElement('p');
  price.classList.add('item__controls__price');
  price.innerText = `Price: ${items[i].price}$`;

  controls.append(stock, btnsWrapper, price)
  return controls
}