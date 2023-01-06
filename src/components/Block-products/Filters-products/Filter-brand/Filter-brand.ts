import { createArr } from "../../../../utils/main/searchSortProduct";
import { IProducts } from "../../../../utils/interface";



export const filterBrand = () => {

    const data: IProducts[] = createArr();

    const divBrand: HTMLDivElement = document.createElement('div');
    const titleBrand: HTMLHeadingElement = document.createElement('h2');
    const divListBrand: HTMLDivElement = document.createElement('div');

    const arrBrand: string[] = data.reduce((acc:string[], item: IProducts) => {        
        return acc.push(item.brand.toLowerCase()), acc;
    }, []);
    const finalBrandArr: string[] = Array.from(new Set(arrBrand));
    
    finalBrandArr.forEach(prod => {
        const divItemBrand: HTMLDivElement = document.createElement('div');
        const labelBrand: HTMLLabelElement = document.createElement('label');
        const spanBrand: HTMLSpanElement = document.createElement('span');
        const inputBrand: HTMLInputElement = document.createElement('input');

        spanBrand.textContent = prod;
        inputBrand.type = 'checkbox';
        inputBrand.name = 'brand';
        inputBrand.value = prod;

        divItemBrand.classList.add('brand__item');
        labelBrand.classList.add('brand__label');
        spanBrand.classList.add('brand__span');
        inputBrand.classList.add('brand__input');

        spanBrand.style.cursor = 'pointer';
        inputBrand.style.cursor = 'pointer';

        labelBrand.append(inputBrand,spanBrand);
        divItemBrand.append(labelBrand);
        divListBrand.append(divItemBrand);
    });
    divBrand.classList.add('brand');
    titleBrand.classList.add('brand__title');
    divListBrand.classList.add('brand__list');
    titleBrand.textContent = 'Brand';

    divBrand.append(titleBrand, divListBrand);



    return divBrand;

}