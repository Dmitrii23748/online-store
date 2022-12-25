import { IProducts } from "../../../../utils/interface";
// import { data } from "../../../..";
import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";
import { addClassProducts } from "../../../../utils/addUrlParams";
import { createCardProduct } from "../Product-card/Product-card";

import { createArr, searchProducts, sortProducts} from "../../../../utils/main/searchSortProduct";



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
    });

     // сохранить сортировку
    if(localStorage.getItem('sortOption') !== null) {
        let sortOptionValue = localStorage.getItem('sortOption')!;
        sortWrapper.select.value = sortOptionValue;
        sortProducts(sortOptionValue, allProducts, db, createCardProduct);
    }

    addClassProducts(allProducts);

    divWrapperProducts.append(sortWrapper.divSortWrapper, allProducts);
    return {
        divWrapperProducts,
        allProducts
    } 
}