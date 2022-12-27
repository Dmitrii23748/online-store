import { addItemCart } from "../../../../utils/main/addItemCart";
import { IProducts } from "../../../../utils/interface";
import { setButtonText } from "../../../../utils/main/setButtonText";

export const createCardProduct = (prod: IProducts) => {
   
    const divProd: HTMLDivElement = document.createElement('div');
    const linkProd: HTMLAnchorElement = document.createElement('a');
    const titleProd: HTMLHeadingElement = document.createElement('h2');
    const imgProd: HTMLImageElement = document.createElement('img');
    const listDesc: HTMLUListElement = document.createElement('ul');

    const liDescCategory: HTMLLIElement = document.createElement('li');
    const liDescBrand: HTMLLIElement = document.createElement('li');
    const liDescPrice: HTMLLIElement = document.createElement('li');
    const liDescDiscount: HTMLLIElement = document.createElement('li');
    const liDescRating: HTMLLIElement = document.createElement('li');
    const liDescStock: HTMLLIElement = document.createElement('li');
    const liDescID: HTMLLIElement = document.createElement('li');

    const divBtns: HTMLDivElement = document.createElement('div');
    const btnCart: HTMLButtonElement = document.createElement('button');
    const linkDetails: HTMLAnchorElement = document.createElement('a');

    divProd.classList.add('products-card__item');
    linkProd.classList.add('products-card__link');
    titleProd.classList.add('products-card__brand');
    imgProd.classList.add('products-card__img');
    listDesc.classList.add('card-desc');
    liDescCategory.classList.add('card-desc__item');
    liDescBrand.classList.add('card-desc__item');
    liDescPrice.classList.add('card-desc__item');
    liDescDiscount.classList.add('card-desc__item');
    liDescRating.classList.add('card-desc__item');
    liDescStock.classList.add('card-desc__item');
    liDescID.classList.add('card-desc__item_ID');
    divBtns.classList.add('products-btns');
    btnCart.classList.add('products-btn__item');
    linkDetails.classList.add('products-btn__item');

    linkProd.setAttribute('href', `#/products/${prod.id}`);
    imgProd.src = prod.thumbnail;
    imgProd.alt = 'card-product';
    linkDetails.setAttribute('href', `#/products/${prod.id}`);

    liDescCategory.textContent = `Category: ${prod.category}`;
    liDescBrand.textContent = `Brand: ${prod.brand}`;
    liDescPrice.textContent = `Price: ${prod.price}$`;
    liDescDiscount.textContent = `Discount: ${prod.discountPercentage}%`;
    liDescRating.textContent = `Rating: ${prod.rating}`;
    liDescStock.textContent = `Stock: ${prod.stock}`;
    liDescID.textContent = `${prod.id}`;
    titleProd.textContent = prod.brand;
    btnCart.textContent = setButtonText(prod.id);
    linkDetails.textContent = 'Details';
    
    listDesc.append(liDescCategory, liDescBrand, liDescPrice, liDescDiscount, liDescRating, liDescStock, liDescID);
    linkProd.append(titleProd, imgProd, listDesc);
    divBtns.append(btnCart,linkDetails);
    divProd.append(linkProd,divBtns);

    btnCart.addEventListener('click', addItemCart);

    return divProd
}