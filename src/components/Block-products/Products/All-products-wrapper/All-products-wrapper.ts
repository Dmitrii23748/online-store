import { crateArr } from "../../../../utils/main/searchProduct";
import { IProducts } from "../../../../utils/interface";

import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";
import { addClassProducts } from "../../../../utils/addUrlParams";
import { createCardProduct } from "../Product-card/Product-card";




export const createWrapperAllProducts = () => {
    
    const divWrapperProducts = document.createElement('div');
    divWrapperProducts.classList.add('wrapper-productsAll');

    const db: IProducts[] = crateArr();

    const sortWrapper = createSortWrapper();
    const allProducts = createAllProducts(db);

    // ищет через введение в инпут
    sortWrapper.input.addEventListener('input', (e: any) => {
        let value = e.target.value;
        localStorage.setItem('valueInput', value);
        let strStorage = localStorage.getItem('valueInput')!.toLowerCase()
        allProducts.innerHTML = '';
        const db: IProducts[] = crateArr();
        db.forEach((item) => {           
            if((item.brand.toLowerCase().includes(strStorage) ||
                item.category.toLowerCase().includes(strStorage) ||
                item.title.toLowerCase().includes(strStorage)) ||
                String(item.rating).toLowerCase().includes(strStorage) ||
                String(item.price).toLowerCase().includes(strStorage) ||
                String(item.stock).toLowerCase().includes(strStorage) ||
                String(item.discountPercentage).toLowerCase().includes(strStorage)) {
                    allProducts.append(createCardProduct(item));
            } 
        })

        if([...allProducts.childNodes].length === 0) {
            allProducts.textContent = 'No products'
        };
    });

   
    // сохраняет в инпуте
    function saveTextInput() {
        sortWrapper.input.value = localStorage.getItem('valueInput')!;
        allProducts.innerHTML = '';
        const db: IProducts[] = crateArr();
        db.forEach((item) => {
            if(item.brand.toLowerCase().includes(sortWrapper.input.value) ||
                item.category.toLowerCase().includes(sortWrapper.input.value) ||
                item.title.toLowerCase().includes(sortWrapper.input.value) ||
                String(item.rating).toLowerCase().includes(sortWrapper.input.value) ||
                String(item.price).toLowerCase().includes(sortWrapper.input.value) ||
                String(item.stock).toLowerCase().includes(sortWrapper.input.value) ||
                String(item.discountPercentage).toLowerCase().includes(sortWrapper.input.value) ) {
                    allProducts.append(createCardProduct(item));                    
            } 
        });

        if([...allProducts.childNodes].length === 0) {
            allProducts.textContent = 'No products'
        };
    }
    saveTextInput()


    addClassProducts(allProducts);

   
    divWrapperProducts.append(sortWrapper.divSortWrapper, allProducts);
    return {
        divWrapperProducts,
        allProducts
    } 
}