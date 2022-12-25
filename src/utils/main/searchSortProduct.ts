import { db } from "../../db";
import { IProducts } from "../interface";

export const createArr = () => {
    const arr =  [...db.products];    
    return arr;
}

// export const createArr = async () => {
//     const res = await fetch('../../db-copy.json');
//     const data = await res.json();
//     return data.products;
// }

export const searchProducts = (value: string, htmlElemProducts: HTMLElement, arrDB:IProducts[], htmlAddProdFunc: any, htmlElemSort: any) => {
    localStorage.setItem('valueInput', value);
    let strStorage = localStorage.getItem('valueInput')!.toLowerCase();
    htmlElemProducts.innerHTML = '';
    let arrLocal: IProducts[] = [];

    arrDB.forEach((item) => {           
        if((item.brand.toLowerCase().includes(strStorage) ||
            item.category.toLowerCase().includes(strStorage) ||
            item.title.toLowerCase().includes(strStorage)) ||
            String(item.rating).toLowerCase().includes(strStorage) ||
            String(item.price).toLowerCase().includes(strStorage) ||
            String(item.stock).toLowerCase().includes(strStorage) ||
            String(item.discountPercentage).toLowerCase().includes(strStorage)) {
                htmlElemProducts.append(htmlAddProdFunc(item));
                arrLocal.push(item);
                
        } 
    }); 
    
    localStorage.setItem('arrSearch', JSON.stringify(arrLocal))
    

    if([...htmlElemProducts.childNodes].length === 0) {
        htmlElemProducts.textContent = 'No products';
    };
    htmlElemSort.count.innerText = `Products: ${[...htmlElemProducts.childNodes].length}`;
};


export const sortProducts = (sortOptionValue: string, htmlElemProducts: HTMLElement, arrDB: IProducts[], htmlAddProdFunc: any) => {
    htmlElemProducts.innerHTML = '';
    let arrSearch: IProducts[] = JSON.parse(localStorage.getItem('arrSearch')!);
    
    if(arrSearch !== null) {
        arrDB = [...arrSearch];
    } else {
        arrDB = createArr();
    }
   
    if(sortOptionValue === '1') {      
        arrDB.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));
        })
    };
    if(sortOptionValue === '2') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            return a.price - b.price
        });
        sorArr.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    };

    if(sortOptionValue === '3') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            return b.price - a.price
        });
        sorArr.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    }

    if(sortOptionValue === '4') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
                return -1;
            }
            if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        sorArr.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    };

    if(sortOptionValue === '5') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
                return -1;
            }
            if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        sorArr.reverse().forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    }
}