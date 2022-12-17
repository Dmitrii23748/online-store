import { createWrapperProducts } from "../../components/Block-products/Wrapper-products/Wrapper-products";

export const addMainPage = () => {
    const sectionMain = document.createElement('section');
    const containerMain = document.createElement('div');

    sectionMain.classList.add('products');
    containerMain.classList.add('container');

    const wrapperProducts = createWrapperProducts();
    containerMain.append(wrapperProducts);
    sectionMain.append(containerMain);
    return sectionMain;
}