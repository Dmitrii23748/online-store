
export const createSortWrapper = () => {

    const divSortWrapper = document.createElement('div');
    divSortWrapper.classList.add('products-sort');

    const btnSmall = document.createElement('button');
    const btnBig = document.createElement('button');

    btnSmall.classList.add('btn-small');
    btnBig.classList.add('btn-big');

    btnSmall.textContent = 'SMALL';
    btnBig.textContent = 'BIG';

    divSortWrapper.textContent = 'Блок  различные виды сортировки';

    divSortWrapper.append(btnSmall, btnBig)

    return  {
        divSortWrapper,
        btnSmall,
        btnBig
    }

}