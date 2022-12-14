
export const addNavigate = () => {

    const divNav: HTMLDivElement = document.createElement('div');
    const nav: HTMLElement = document.createElement('nav');
    const ul: HTMLUListElement = document.createElement('ul');
    const liMain: HTMLElement = document.createElement('li');
    const liCart: HTMLElement = document.createElement('li');
    const linkMain: HTMLElement = document.createElement('a');
    const linkCart: HTMLElement = document.createElement('a');

    divNav.classList.add('block-navigate');
    nav.classList.add('navigate');
    ul.classList.add('navigate-list');
    liMain.classList.add('navigate-item');
    liCart.classList.add('navigate-item');
    linkMain.classList.add('navigate-item__link');
    linkCart.classList.add('navigate-item__link');

    linkMain.setAttribute('href','#/');
    linkCart.setAttribute('href','#/cart');

    linkMain.textContent = 'Main Page';
    linkCart.textContent = 'Cart Page';

    liMain.append(linkMain);
    liCart.append(linkCart);
    ul.append(liMain,liCart);
    nav?.append(ul);
    divNav.append(nav);    
    return divNav;
}