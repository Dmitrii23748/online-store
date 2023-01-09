import { Promocodes } from "../../components/promocodes";
import { ICartProducts, IPromo } from "../interface";
import { addModal } from "../modal/addModal";
import { checkPromo } from "./promoCheck";
import { appendPromo } from "./promoAppend";

export function addCheckout(items: Array<ICartProducts>): Array<HTMLElement> {
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

function addCheckoutBody(items: Array<ICartProducts>): HTMLElement {
  const checkoutBody = document.createElement('div');
  checkoutBody.classList.add('checkout__body');

  const checkoutProducts = document.createElement('p');
  checkoutProducts.classList.add('checkout__products');
  checkoutProducts.innerText = `Products: ${items.length}`;

  const checkoutTotal = document.createElement('p');
  checkoutTotal.classList.add('checkout__total');
  checkoutTotal.innerText = `Total: ${items.reduce((acc, item) => acc + item.price * item.count, 0)}$`;

  const checkoutPromo = document.createElement('input')
  checkoutPromo.type = 'text';
  checkoutPromo.placeholder = 'Enter promo code';
  checkoutPromo.classList.add('checkout__promo');
  checkoutPromo.addEventListener('input', checkPromo);
  checkUsedPromo(checkoutBody);

  const checkoutButton = document.createElement('input')
  checkoutButton.type = 'button';
  checkoutButton.value = 'Buy now';
  checkoutButton.classList.add('checkout__button');
  checkoutButton.addEventListener('click', addModal);

  checkoutBody.append(checkoutProducts, checkoutTotal, checkoutPromo, checkoutButton)
  return checkoutBody
}

function checkUsedPromo(body: HTMLElement):void {
  const usedPromo = JSON.parse(window.localStorage.getItem('usedPromo') as string);
  const promocodes: IPromo = JSON.parse(window.localStorage.getItem('promocodes') as string);
  if (usedPromo.length > 0) {
    usedPromo.forEach((element: string) => {
      appendPromo(element, promocodes, body);
    });
  }
}