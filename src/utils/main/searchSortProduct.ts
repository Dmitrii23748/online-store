import { db } from "../../db";
import { IProducts } from "../interface";

export const createArr = () => {
    const arr =  [...db.products];    
    return arr;
}

export const searchProducts = (value: string, htmlElemProducts: HTMLElement, arrDB:IProducts[], htmlAddProdFunc: (prod: IProducts) => HTMLDivElement, htmlElemSort: {
    divSortWrapper: HTMLDivElement;
    btnSmall: HTMLButtonElement;
    btnBig: HTMLButtonElement;
    input: HTMLInputElement;
    select: HTMLSelectElement;
    count: HTMLSpanElement;
}) => {

    localStorage.setItem('valueInput',`${value}`);
    let strStorage = localStorage.getItem('valueInput')!.toLowerCase();
    htmlElemProducts.innerHTML = '';
    let arrLocal: IProducts[] = [];

    let arrSearch: IProducts[] = JSON.parse(localStorage.getItem('arrSearch')!);
    // if(arrSearch.length > 0) {
    //     arrDB = [...arrSearch];
    // }

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


export const sortProducts = (sortOptionValue: string, htmlElemProducts: HTMLElement, arrDB: IProducts[], htmlAddProdFunc: (prod: IProducts) => HTMLDivElement) => {
    htmlElemProducts.innerHTML = '';
    let arrSearch: IProducts[] = JSON.parse(localStorage.getItem('arrSearch')!);
    
    if(arrSearch !== null) {
        arrDB = [...arrSearch];
    } else {
        arrDB = createArr();
    }
   
    if(sortOptionValue === 'noSort') {      
        arrDB.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));
        })
    };
    if(sortOptionValue === 'upPrice') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            return a.price - b.price
        });
        sorArr.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    };

    if(sortOptionValue === 'downPrice') {
        const sorArr = arrDB.sort((a: IProducts, b: IProducts): number => {
            return b.price - a.price
        });
        sorArr.forEach(item => {
            htmlElemProducts.append(htmlAddProdFunc(item));   
        })
    }

    if(sortOptionValue === 'downABC') {
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

    if(sortOptionValue === 'upABC') {
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