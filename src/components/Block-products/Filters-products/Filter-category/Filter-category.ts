import { createArr } from "../../../../utils/main/searchSortProduct";
import { IProducts } from "../../../../utils/interface";



export const filterCategory = () => {

    const data: IProducts[] = createArr();

    const divCategory: HTMLDivElement = document.createElement('div');
    const titleCategory: HTMLHeadingElement = document.createElement('h2');
    const divListCategory: HTMLDivElement = document.createElement('div');

    const arrCategory: string[] = data.reduce((acc:string[], item: IProducts) => {        
        return acc.push(item.category), acc;
    }, []);
    const finalCategoryArr: string[] = Array.from(new Set(arrCategory));
    
    finalCategoryArr.forEach(prod => {
        const divItemCategory: HTMLDivElement = document.createElement('div');
        const labelCategory: HTMLLabelElement = document.createElement('label');
        const spanCategory: HTMLSpanElement = document.createElement('span');
        const inputCategory: HTMLInputElement = document.createElement('input');

        spanCategory.textContent = prod;
        inputCategory.type = 'checkbox';
        inputCategory.name = 'category';
        inputCategory.value = prod;

        divItemCategory.classList.add('category__item');
        labelCategory.classList.add('category__label');
        spanCategory.classList.add('category__span');
        inputCategory.classList.add('category__input');

        spanCategory.style.cursor = 'pointer';
        inputCategory.style.cursor = 'pointer';

        labelCategory.append(inputCategory,spanCategory);
        divItemCategory.append(labelCategory);
        divListCategory.append(divItemCategory);
    });
    divCategory.classList.add('category');
    titleCategory.classList.add('category__title');
    divListCategory.classList.add('category__list');
    titleCategory.textContent = 'Category';

    divCategory.append(titleCategory, divListCategory);

    return divCategory;

}