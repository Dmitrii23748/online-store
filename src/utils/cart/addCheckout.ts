import { IProducts } from "../interface";

export function addCheckout(items: Array<IProducts>): Array<HTMLElement> {
    return [addCheckoutTitle(), addCheckoutBody(items)]
}

function addCheckoutTitle(): HTMLElement {
  const checkoutTitle = document.createElement('div');
  checkoutTitle.classList.add('checkout__title');
  const checkoutTitle_text = document.createElement('span');
  checkoutTitle_text.classList.add('checkout__title__text');
  checkoutTitle_text.innerText = 'Summary';
  checkoutTitle.append(checkoutTitle_text);

  return checkoutTitle;
}

function addCheckoutBody(items: Array<IProducts>): HTMLElement {
  const checkoutBody = document.createElement('div');
  checkoutBody.classList.add('checkout__body');

  const checkoutProducts = document.createElement('p');
  checkoutProducts.classList.add('checkout__products');
  checkoutProducts.innerText = `Products: ${items.length}`;

  const checkoutTotal = document.createElement('p');
  checkoutTotal.classList.add('checkout__total');
  checkoutTotal.innerText = `Total: ${items.reduce((acc, item) => acc + item.price, 0)}$`;

  const checkoutPromo = document.createElement('input')
  checkoutPromo.type = 'text';
  checkoutPromo.placeholder = 'Enter promo code';
  checkoutPromo.classList.add('checkout__promo');

  const checkoutButton = document.createElement('input')
  checkoutButton.type = 'button';
  checkoutButton.value = 'Buy now';
  checkoutButton.classList.add('checkout__button');

  checkoutBody.append(checkoutProducts, checkoutTotal, checkoutPromo, checkoutButton)
  return checkoutBody
}