import { db } from "../../db";
import { DescriptionProd } from "../../components/Block-products/Products/Description-prod/Description-prod";
import { listenerHrefId } from "../../utils/listenerHrefId";

export const addDescriptionPage = () => {

    const arrDB = db.products;
    const idHref = listenerHrefId();
    
    const section = document.createElement('section');
    section.classList.add('description');

    const oneProd = arrDB.filter(item => {
        if(item.id === idHref) {
            return item;
        }
    });

    const createIdElement = DescriptionProd(oneProd[0]);

    section.append(createIdElement);

    return section;
}