import { createWrapperProducts } from "../../components/Block-products/Wrapper-products/Wrapper-products";
import { checkEmptyStorage } from "../../utils/main/checkEmptyStorage";
import { updatePages } from "../../utils/main/updatePages";
import { footerBlock } from "../../components/Footer/Footer";

export const addMainPage = () => {
    checkEmptyStorage();
    updatePages();
    const sectionMain = document.createElement('section');
    const containerMain = document.createElement('div');

    const sectionFooter = document.createElement('footer');
    const containerFooter = document.createElement('div');
    sectionFooter.classList.add('footer');
    containerFooter.classList.add('container');

    sectionMain.classList.add('products');
    containerMain.classList.add('container');

    const wrapperProducts = createWrapperProducts();
    const footerBlockComp = footerBlock();
    containerMain.append(wrapperProducts);
    sectionMain.append(containerMain);
    sectionFooter.append(containerFooter);
    containerFooter.append(footerBlockComp);

    wraperMain.append(sectionMain, sectionFooter)
    return wraperMain;
}