
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
    input.classList.add('search');

    divSearch.append(input);
    divBlockSmallBig.append(btnSmall, btnBig)

    divSortWrapper.append(divSearch, divBlockSmallBig);

    return  {
        divSortWrapper,
        btnSmall,
        btnBig,
        input
    }

}