import { createArr } from "../../../../utils/main/searchSortProduct";
import { IProducts } from "../../../../utils/interface";


export const filterStock = () => {
    const data: IProducts[] = createArr();

    const arrCategory: number[] = data.reduce((acc:number[], item: IProducts) => {        
        return acc.push(item.stock), acc;
    }, []);
    const finalStockArr: number[] = Array.from(new Set(arrCategory));
    const minValue = Math.min.apply(null, finalStockArr);
    const maxValue = Math.max.apply(null, finalStockArr);
    
    const divStock: HTMLDivElement = document.createElement('div');
    const titleStock: HTMLHeadingElement = document.createElement('h2');
    const divStockInput: HTMLDivElement = document.createElement('div');
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

    divStock.classList.add('stock-filter');
    titleStock.classList.add('title-stock');
    divStockInput.classList.add('stock-input');
    divFieldMin.classList.add('field');
    inputMin.classList.add('input-min');
    divSeparator.classList.add('separator');
    divFieldMax.classList.add('field');
    inputMax.classList.add('input-max');
    divSlider.classList.add('slider-stock');
    divProgress.classList.add('progress-stock');
    rangeInput.classList.add('range-input-stock');
    rangeInputMin.classList.add('range-min-stock');
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

    titleStock.innerText = 'Stock';
    spanMin.innerText = 'Min';
    divSeparator.innerText = '-';
    spanMax.innerText = 'Max';

    rangeInput.append(rangeInputMin,rangeInputMax);
    divSlider.append(divProgress);
    divFieldMax.append(spanMax,inputMax);
    divFieldMin.append(spanMin,inputMin);
    divStockInput.append(divFieldMin,divSeparator,divFieldMax);
    divStock.append(titleStock, divStockInput, divSlider, rangeInput);

    return divStock;
}