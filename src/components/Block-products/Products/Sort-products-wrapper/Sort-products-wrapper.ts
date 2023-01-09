
export const createSortWrapper = () => {

    const divSortWrapper: HTMLDivElement = document.createElement('div');
    divSortWrapper.classList.add('products-sort');

    const divBlockSmallBig: HTMLDivElement = document.createElement('div');
    divBlockSmallBig.classList.add('products-sort__small-big');
    const btnSmall: HTMLButtonElement = document.createElement('button');
    const btnBig: HTMLButtonElement = document.createElement('button');
    btnSmall.classList.add('btn-small');
    btnBig.classList.add('btn-big');
    btnSmall.textContent = 'SMALL';
    btnBig.textContent = 'BIG';

    const divSearch: HTMLDivElement = document.createElement('div');
    divSearch.classList.add('block-search');
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'search';
    input.classList.add('search');

    const divSelect: HTMLDivElement = document.createElement('div');
    divSelect.classList.add('block-select');
    const select: HTMLSelectElement = document.createElement('select');
    const option1: HTMLOptionElement = document.createElement('option');
    const option2: HTMLOptionElement = document.createElement('option');
    const option3: HTMLOptionElement = document.createElement('option');
    const option4: HTMLOptionElement = document.createElement('option');
    const option5: HTMLOptionElement = document.createElement('option');
    select.classList.add('sort')
    option1.value = 'noSort';
    option2.value = 'upPrice';
    option3.value = 'downPrice';
    option4.value = 'downABC';
    option5.value = 'upABC';
    option1.textContent = 'NO SORT';
    option2.textContent = 'Sort by price ASC';
    option3.textContent = 'Sort by price DESC';
    option4.textContent = 'Sort by brand ASC';
    option5.textContent = 'Sort by brand DESC';
    select.append(option1,option2,option3,option4,option5);

    const divCountProd: HTMLDivElement = document.createElement('div');
    divCountProd.classList.add('block__count-prod');
    const count: HTMLSpanElement = document.createElement('span');
    count.classList.add('span-couter-products')

    divCountProd.append(count)
    divSelect.append(select);
    divSearch.append(input);
    divBlockSmallBig.append(btnSmall, btnBig)

    divSortWrapper.append(divSearch, divBlockSmallBig, divCountProd, divSelect);

    return  {
        divSortWrapper,
        btnSmall,
        btnBig,
        input,
        select,
        count
    }

}