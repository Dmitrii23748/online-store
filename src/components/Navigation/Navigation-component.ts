import { createWrapperAllProducts } from "../Block-products/Products/All-products-wrapper/All-products-wrapper";

export const addNavigate = () => {

    const nav: HTMLElement = document.createElement('nav');
    const ul: HTMLUListElement = document.createElement('ul');
    const liMain: HTMLElement = document.createElement('li');
    const liCart: HTMLElement = document.createElement('li');
    const linkMain: HTMLElement = document.createElement('a');
    const linkCart: HTMLElement = document.createElement('a');
    const spanCountProd: HTMLSpanElement = document.createElement('span');

    nav.classList.add('navigate');
    ul.classList.add('navigate-list');
    liMain.classList.add('navigate-item');
    liCart.classList.add('navigate-item');
    linkMain.classList.add('navigate-item__link');
    linkMain.classList.add('navigate-item__link-text');
    linkCart.classList.add('navigate-item__link');
    linkCart.classList.add('navigate-item__link-text');
    spanCountProd.classList.add('count-prod');
    
    linkMain.setAttribute('href','#/');
    linkCart.setAttribute('href','#/cart');
    linkMain.textContent = 'ONLINE-STORE';
    linkCart.textContent = 'CART';
    spanCountProd.textContent = '3';
    
    liMain.append(linkMain);
    liCart.append(linkCart, spanCountProd);
    ul.append(liMain,liCart);
    nav.append(ul);

    linkMain.addEventListener('click', () => {
        localStorage.clear();
        createWrapperAllProducts();
        // window.location.reload();
    });
    return nav;
}