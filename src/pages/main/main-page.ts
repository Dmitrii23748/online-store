import { createWrapperProducts } from "../../components/Block-products/Wrapper-products/Wrapper-products";
import { checkEmptyStorage } from "../../utils/main/checkEmptyStorage";
import { updatePages } from "../../utils/main/updatePages";
import { footerBlock } from "../../components/Footer/Footer";

export const addMainPage = () => {
    checkEmptyStorage();
    updatePages();
    const sectionMain = document.createElement('section');
    const containerMain = document.createElement('div');

    if (!document.querySelector('.footer__block')) {
      const sectionFooter = document.querySelector('.footer') as HTMLElement;
      const containerFooter = document.createElement('div');
      containerFooter.classList.add('container');
      const footerBlockComp = footerBlock();
      sectionFooter.append(containerFooter);
      containerFooter.append(footerBlockComp);
    }

    sectionMain.classList.add('products');
    containerMain.classList.add('container');

    const wrapperProducts = createWrapperProducts();
    containerMain.append(wrapperProducts);
    sectionMain.append(containerMain);

    return sectionMain;
}