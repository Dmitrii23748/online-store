import { IProducts } from "../../../../utils/interface";

export const DescriptionProd = (item: IProducts) => {

    
    const divContainer: HTMLDivElement = document.createElement('div');
    const ulBread: HTMLUListElement = document.createElement('ul');
    const liBread1: HTMLLIElement = document.createElement('li');
    const liBread2: HTMLLIElement = document.createElement('li');
    const liBread3: HTMLLIElement = document.createElement('li');
    const liBread4: HTMLLIElement = document.createElement('li');
    const aLink: HTMLAnchorElement = document.createElement('a');
    const divWrapper: HTMLDivElement = document.createElement('div');
    const h2Title: HTMLHeadingElement = document.createElement('h2');
    const divBlock: HTMLDivElement = document.createElement('div');
    const divBox: HTMLDivElement = document.createElement('div');
    const divBoxItems: HTMLDivElement = document.createElement('div');
    const divBoxMain: HTMLDivElement = document.createElement('div');
    const divBoxMainImg: HTMLImageElement = document.createElement('img');
    const ulCharacterList: HTMLUListElement = document.createElement('ul');
    const liCharacterItem1: HTMLLIElement = document.createElement('li');
    const liCharacterItem2: HTMLLIElement = document.createElement('li');
    const liCharacterItem3: HTMLLIElement = document.createElement('li');
    const liCharacterItem4: HTMLLIElement = document.createElement('li');
    const liCharacterItem5: HTMLLIElement = document.createElement('li');
    const liCharacterItem6: HTMLLIElement = document.createElement('li');
    const divBtns: HTMLDivElement = document.createElement('div');
    const spanPrice: HTMLSpanElement = document.createElement('span');
    const btnAddCart: HTMLButtonElement = document.createElement('button');
    const btnBuyNow: HTMLButtonElement = document.createElement('button');


    divContainer.classList.add('container');
    ulBread.classList.add('description__bread-list');
    liBread1.classList.add('description__bread-item');
    liBread2.classList.add('description__bread-item');
    liBread3.classList.add('description__bread-item');
    liBread4.classList.add('description__bread-item');
    aLink.classList.add('description__bread-link');
    divWrapper.classList.add('description-wrapper');
    h2Title.classList.add('description__title');
    divBlock.classList.add('description__block');
    divBox.classList.add('description-box');
    divBoxItems.classList.add('description-box__items');
    item.images.forEach((img, index) => {
        const imgItems: HTMLImageElement = document.createElement('img');
        imgItems.classList.add("description-box__items-img");
        imgItems.src = `${item.images[index]}`;
        divBoxItems.append(imgItems);

        imgItems.addEventListener('click', () => {
            divBoxMainImg.src = imgItems.src;
        })
    });

    divBoxMain.classList.add('description-box__main');
    divBoxMainImg.classList.add('description-box__main-img');
    ulCharacterList.classList.add('description__character-list');
    liCharacterItem1.classList.add('description__character-item');
    liCharacterItem2.classList.add('description__character-item');
    liCharacterItem3.classList.add('description__character-item');
    liCharacterItem4.classList.add('description__character-item');
    liCharacterItem5.classList.add('description__character-item');
    liCharacterItem6.classList.add('description__character-item');
    divBtns.classList.add('description__btns');
    spanPrice.classList.add('description__btns-price');
    spanPrice.classList.add('desc-btn');
    btnAddCart.classList.add('products-btn__item');
    btnAddCart.classList.add('description__btn-cart');
    btnAddCart.classList.add('desc-btn');
    btnBuyNow.classList.add('description__btn-cart');
    btnBuyNow.classList.add('desc-btn');

    aLink.href = '#/';
    divBoxMainImg.src = `${item.thumbnail}`;
    divBoxMainImg.alt = 'product';

    aLink.textContent = 'Store-->>';
    liBread2.textContent = `${item.category}-->>`;
    liBread3.textContent = `${item.brand}-->>`;
    liBread4.textContent = `${item.title}`;
    h2Title.textContent = `${item.title}`;
    liCharacterItem1.textContent = `Description: ${item.description}`;
    liCharacterItem2.textContent = `Discount Percentage: ${item.discountPercentage}`;
    liCharacterItem3.textContent = `Rating: ${item.rating}`;
    liCharacterItem4.textContent = `Stock: ${item.stock}`;
    liCharacterItem5.textContent = `Brand: ${item.brand}`;
    liCharacterItem6.textContent = `Category: ${item.category}`;
    spanPrice.textContent = `${item.price} $`;
    btnAddCart.textContent = 'Add to cart';
    btnBuyNow.textContent = 'Buy Now';


     // items append
    divBoxMain.append(divBoxMainImg);
    divBox.append(divBoxItems, divBoxMain);
    ulCharacterList.append(liCharacterItem1, liCharacterItem2, liCharacterItem3, liCharacterItem4, liCharacterItem5, liCharacterItem6);
    divBtns.append(spanPrice,btnAddCart,btnBuyNow);
    divBlock.append(divBox, ulCharacterList,divBtns);

    divWrapper.append(h2Title, divBlock);

    liBread1.append(aLink);
    ulBread.append(liBread1, liBread2, liBread3, liBread4);

    divContainer.append(ulBread, divWrapper);

    return divContainer;
}