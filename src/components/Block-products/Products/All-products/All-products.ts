import { createCardProduct } from "../Product-card/Product-card";
import { IProducts } from "../../../../utils/interface";


export const createAllProducts = (db: IProducts[]) => {
    
    const div = document.createElement('div');
    div.classList.add('products-cards');
    const products = db;
    products.forEach(item => {
        let cardProduct = createCardProduct(item);        
        div.append(cardProduct);
    });
    
    return div;
}