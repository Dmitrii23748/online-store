export const createSortWrapper = () => {

    const divSortWrapper = document.createElement('div');
    divSortWrapper.classList.add('products-sort');

    divSortWrapper.textContent = 'Блок  различные виды сортировки';

    return divSortWrapper;
}