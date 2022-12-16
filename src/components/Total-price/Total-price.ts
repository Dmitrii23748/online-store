

export const addTotalPrice = () => {

    const divPriceBlock = document.createElement('div');
    const divlPrice = document.createElement('div');
    const spanPriceText: HTMLElement = document.createElement('span');
    const spanPriceNumber: HTMLElement = document.createElement('span');

    divPriceBlock.classList.add('price');
    divlPrice.classList.add('price-block');
    spanPriceText.classList.add('price-block__span-text');
    spanPriceNumber.classList.add('price-block__span-number');

    spanPriceText.textContent = 'Cart Total: ';
    spanPriceNumber.textContent = `100 $`;

    divlPrice.append(spanPriceText,spanPriceNumber);
    divPriceBlock.append(divlPrice)

    return {
        divPriceBlock,
        spanPriceNumber
    }
}