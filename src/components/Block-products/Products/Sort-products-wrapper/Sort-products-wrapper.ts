
export const createSortWrapper = () => {

    const divSortWrapper: HTMLDivElement = document.createElement('div');
    divSortWrapper.classList.add('products-sort');

    const divBlockSmallBig: HTMLDivElement = document.createElement('div');
    divBlockSmallBig.classList.add('products-sort__small-big');
    const btnSmall: HTMLAnchorElement = document.createElement('a');
    const btnBig: HTMLAnchorElement = document.createElement('a');
    btnSmall.classList.add('btn-small');
    btnBig.classList.add('btn-big');
    btnSmall.href = '#/?table=small';
    btnBig.href = '#/?table=big';
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
    option1.value = '1';
    option2.value = '2';
    option3.value = '3';
    option4.value = '4';
    option5.value = '5';
    option1.textContent = 'Без сортировки';
    option2.textContent = 'От меньшей price к большей';
    option3.textContent = 'От большей price к меньшей';
    option4.textContent = 'По алфавиту brand вниз';
    option5.textContent = 'По алфавиту brand вверх';
    select.append(option1,option2,option3,option4,option5);

    const divCountProd: HTMLDivElement = document.createElement('div');
    divCountProd.classList.add('block__count-prod');
    const count: HTMLSpanElement = document.createElement('span');

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