import { createArr } from "../../../../utils/main/searchSortProduct";
import { IProducts } from "../../../../utils/interface";


export const filterPrice = () => {
    const data: IProducts[] = createArr();

    const arrCategory: number[] = data.reduce((acc:number[], item: IProducts) => {        
        return acc.push(item.price), acc;
    }, []);
    const finalPriceArr: number[] = Array.from(new Set(arrCategory));
    const minValue = Math.min.apply(null, finalPriceArr);
    const maxValue = Math.max.apply(null, finalPriceArr);
    
    const divPrice: HTMLDivElement = document.createElement('div');
    const titlePrice: HTMLHeadingElement = document.createElement('h2');
    const divPriceInput: HTMLDivElement = document.createElement('div');
    const divFieldMin: HTMLDivElement = document.createElement('div');
    const spanMin: HTMLSpanElement = document.createElement('span');
    const inputMin: HTMLInputElement = document.createElement('input');
    const divSeparator: HTMLDivElement = document.createElement('div');
    const divFieldMax: HTMLDivElement = document.createElement('div');
    const spanMax: HTMLSpanElement = document.createElement('span');
    const inputMax: HTMLInputElement = document.createElement('input');
    const divSlider: HTMLDivElement = document.createElement('div');
    const divProgress: HTMLDivElement = document.createElement('div');
    const rangeInput: HTMLDivElement = document.createElement('div');
    const rangeInputMin: HTMLInputElement = document.createElement('input');
    const rangeInputMax: HTMLInputElement = document.createElement('input');

    divPrice.classList.add('price-filter');
    titlePrice.classList.add('title-price');
    divPriceInput.classList.add('price-input');
    divFieldMin.classList.add('field');
    inputMin.classList.add('input-min');
    divSeparator.classList.add('separator');
    divFieldMax.classList.add('field');
    inputMax.classList.add('input-max');
    divSlider.classList.add('slider');
    divProgress.classList.add('progress');
    rangeInput.classList.add('range-input');
    rangeInputMin.classList.add('range-min');
    rangeInputMax.classList.add('range-max');

    inputMin.type = 'number';
    inputMin.value = `${minValue}`;
    inputMax.type = 'number';
    inputMax.value = `${maxValue}`;
    rangeInputMin.type = 'range';
    rangeInputMax.type = 'range';
    rangeInputMin.min = `${minValue}`;
    rangeInputMin.max = `${maxValue}`;
    rangeInputMax.min = `${minValue}`;
    rangeInputMax.max = `${maxValue}`;
    rangeInputMin.value = `${minValue}`;
    rangeInputMax.value = `${maxValue}`;
    rangeInputMin.step = '1';
    rangeInputMax.step = '1';

    titlePrice.innerText = 'Price';
    spanMin.innerText = 'Min';
    divSeparator.innerText = '-';
    spanMax.innerText = 'Max';

    rangeInput.append(rangeInputMin,rangeInputMax);
    divSlider.append(divProgress);
    divFieldMax.append(spanMax,inputMax);
    divFieldMin.append(spanMin,inputMin);
    divPriceInput.append(divFieldMin,divSeparator,divFieldMax);
    divPrice.append(titlePrice, divPriceInput, divSlider, rangeInput);

    return divPrice;
}