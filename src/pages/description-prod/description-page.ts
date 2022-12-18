import { db } from "../../db";
import { createCardProduct } from "../../components/Block-products/Products/Product-card/Product-card";
import { listenerHrefId } from "../../utils/listenerHrefId";

export const addDescriptionPage = () => {

    const arrDB = db.products;
    const idHref = listenerHrefId();
    
    const divDesc = document.createElement('div');

    const oneProd = arrDB.filter(item => {
        if(item.id === idHref) {
            return item;
        }
    });

    const createIdElement = createCardProduct(oneProd[0]);

    divDesc.append(createIdElement);
    return divDesc;
}