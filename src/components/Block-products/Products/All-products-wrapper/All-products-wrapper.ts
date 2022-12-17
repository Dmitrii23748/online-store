import { createSortWrapper } from "../Sort-products-wrapper/Sort-products-wrapper";
import { createAllProducts } from "../All-products/All-products";

export const createWrapperAllProducts = () => {
    const divWrapperProducts = document.createElement('div');
    divWrapperProducts.classList.add('wrapper-productsAll');

    const sortWrapper = createSortWrapper();
    const allProducts = createAllProducts();

    divWrapperProducts.append(sortWrapper,allProducts);
    return divWrapperProducts;
}