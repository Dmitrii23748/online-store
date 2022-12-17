import { createWrapperFilters } from "../Filters-products/Wrapper-filters/Wrapper-filters";
import { createWrapperAllProducts } from "../Products/All-products-wrapper/All-products-wrapper";

export const createWrapperProducts = () => {
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('wrapper-products');

    const wrapperFilters = createWrapperFilters();
    const wrapperAllProducts = createWrapperAllProducts();

    divWrapper.append(wrapperFilters, wrapperAllProducts);
    return divWrapper;
}