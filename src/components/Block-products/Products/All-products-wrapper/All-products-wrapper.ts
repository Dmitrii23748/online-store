import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";
import { addUrlParams } from "../../../../utils/addUrlParams";


export const createWrapperAllProducts = () => {

    const divWrapperProducts = document.createElement('div');
    divWrapperProducts.classList.add('wrapper-productsAll');

    const sortWrapper = createSortWrapper();
    const allProducts = createAllProducts();

    // меньше-больше размеры карточек
    sortWrapper.btnSmall.addEventListener('click', () => {
        addUrlParams('table','small');
        allProducts.classList.add('products-cards-big');
        const cardDesc = document.querySelectorAll('.card-desc');
        cardDesc.forEach(item => {
            item.classList.add('none')
        });  

    });
    sortWrapper.btnBig.addEventListener('click', () => {
        addUrlParams('table','big')
        allProducts.classList.remove('products-cards-big');
        const cardDesc = document.querySelectorAll('.card-desc');
        cardDesc.forEach(item => {
            item.classList.remove('none')
        });
    });

    divWrapperProducts.append(sortWrapper.divSortWrapper, allProducts);
    return {
        divWrapperProducts,
        allProducts
    } 
}