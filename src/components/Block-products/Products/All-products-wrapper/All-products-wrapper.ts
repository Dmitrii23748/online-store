import { IProducts } from "../../../../utils/interface";
import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";
import { createCardProduct } from "../Product-card/Product-card";
import { createArr, searchProducts, sortProducts} from "../../../../utils/main/searchSortProduct";
import { addClassDivElem } from "../../../../utils/addUrlParams";




export const createWrapperAllProducts = () => {
    
    const divWrapperProducts = document.createElement('div');
    divWrapperProducts.classList.add('wrapper-productsAll');

    const db: IProducts[] = createArr();
 
    const sortWrapper = createSortWrapper();
    const allProducts = createAllProducts(db);    

    sortWrapper.count.innerText = `Products: ${db.length}`;

    // ищет через введение в инпут
    sortWrapper.input.addEventListener('input', (e: Event) => {
        const db: IProducts[] = createArr();
        let value = (e.target as HTMLInputElement).value;
        searchProducts(value, allProducts, db, createCardProduct, sortWrapper);  
    });

    // сохраняет в инпуте
    if(localStorage.getItem('valueInput') !== null) {
        let strStorage = localStorage.getItem('valueInput')!;
        sortWrapper.input.value = strStorage;
        searchProducts(strStorage, allProducts, db, createCardProduct, sortWrapper);
    }
  
    // сортировка товаров по цене и брэнду
    sortWrapper.select.addEventListener('input', (e: Event) => {
        const db: IProducts[] = createArr();
        let value = (e.target as HTMLSelectElement).value;
        localStorage.setItem('sortOption', value);
        let sortOptionValue = localStorage.getItem('sortOption')!;        
        sortProducts(sortOptionValue, allProducts, db, createCardProduct);

        if(localStorage.getItem('sortOption') !== null) {
            let tableLoc = localStorage.getItem('table') || '';
            window.location.href = `#/${tableLoc}&sort=${localStorage.getItem('sortOption')}`;
        }
    });

     // сохранить сортировку
    if(localStorage.getItem('sortOption') !== null) {
        let sortOptionValue = localStorage.getItem('sortOption')!;
        sortWrapper.select.value = sortOptionValue;
        sortProducts(sortOptionValue, allProducts, db, createCardProduct);
    }

    // addClassProducts(allProducts);
    
    // изменение размеров карточек
    sortWrapper.btnSmall.addEventListener('click', () => {
        allProducts.classList.add('products-cards-big');
        const list = document.querySelectorAll('.card-desc');
        list.forEach(item => {
            item.classList.add('none');
        });
        localStorage.setItem('table', 'table=small');
        if(!window.location.href.includes('small')) {
            window.location.href = '#/';
            window.location.href = window.location.href + localStorage.getItem('table')!;
        }
    });
    sortWrapper.btnBig.addEventListener('click', () => {
        allProducts.classList.remove('products-cards-big');
        const list = document.querySelectorAll('.card-desc');
        list.forEach(item => {
            item.classList.remove('none');
        });
        localStorage.setItem('table', 'table=big');
        if(!window.location.href.includes('big')) {
            window.location.href = '#/';
            window.location.href = window.location.href + localStorage.getItem('table')!;
        }
    });
    addClassDivElem(allProducts);

    divWrapperProducts.append(sortWrapper.divSortWrapper, allProducts);
    return {
        divWrapperProducts,
        allProducts
    } 
}