import { createWrapperAllProducts } from "../Block-products/Products/All-products-wrapper/All-products-wrapper";

export const addNavigate = () => {

    const nav: HTMLElement = document.createElement('nav');
    const ul: HTMLUListElement = document.createElement('ul');
    const liMain: HTMLElement = document.createElement('li');
    const liCart: HTMLElement = document.createElement('li');
    const linkMain: HTMLElement = document.createElement('a');
    const linkCart: HTMLElement = document.createElement('a');
    const imgLogo: HTMLImageElement = document.createElement('img');
    const imgCart: HTMLImageElement = document.createElement('img');
    const spanCountProd: HTMLSpanElement = document.createElement('span');

    nav.classList.add('navigate');
    ul.classList.add('navigate-list');
    liMain.classList.add('navigate-item');
    liCart.classList.add('navigate-item');
    linkMain.classList.add('navigate-item__link');
    linkCart.classList.add('navigate-item__link');
    imgLogo.classList.add('navigate-item__logo-img');
    imgCart.classList.add('navigate-item__cart-img');
    spanCountProd.classList.add('count-prod');
    
    linkMain.setAttribute('href','#/');
    linkCart.setAttribute('href','#/cart');
    imgLogo.src = 'https://cdn.pixabay.com/photo/2015/09/16/08/53/shop-942397__340.jpg';
    imgLogo.alt = 'logo';
    imgCart.src = 'https://cdn.pixabay.com/photo/2016/12/21/16/34/shopping-cart-1923313__340.png';
    imgCart.alt = 'cart';
    spanCountProd.textContent = '3';
    
    linkMain.append(imgLogo);
    linkCart.append(imgCart);
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