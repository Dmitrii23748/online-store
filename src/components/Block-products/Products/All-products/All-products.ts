import { db } from '../../../../db';
import { createCardProduct } from "../Product-card/Product-card";


export const createAllProducts = () => {
    
    const div = document.createElement('div');
    div.classList.add('products-cards');

    const products = db.products;
    products.forEach(item => {
        const cardProduct = createCardProduct(item);
        div.append(cardProduct);
    })
    return div;
}