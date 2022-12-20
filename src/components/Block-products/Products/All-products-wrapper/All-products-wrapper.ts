import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";
import { addClassProducts } from "../../../../utils/addUrlParams";


export const createWrapperAllProducts = () => {

    const divWrapperProducts = document.createElement('div');
    divWrapperProducts.classList.add('wrapper-productsAll');

    const sortWrapper = createSortWrapper();
    const allProducts = createAllProducts();

    addClassProducts(allProducts);
    
    divWrapperProducts.append(sortWrapper.divSortWrapper, allProducts);
    return {
        divWrapperProducts,
        allProducts
    } 
}