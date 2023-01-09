
export const buttonsClearCopy = () => {

    const divButtons = document.createElement('div');
    const divBlockBtns = document.createElement('div');
    const btnClear = document.createElement('button');
    const btnCopy = document.createElement('button');

    divButtons.classList.add('btnsClearCopy');
    divBlockBtns.classList.add('btnsClearCopy__block');
    btnClear.classList.add('btn__clear');
    btnCopy.classList.add('btn__copy');

    btnClear.textContent = 'Clear filters';
    btnCopy.textContent = 'Copy link';

    divBlockBtns.append(btnClear,btnCopy);
    divButtons.append(divBlockBtns);

    btnCopy.addEventListener('click', () => {
        btnCopy.textContent = 'Copied!'
        const url = window.location.href;        
        const inputFake = document.createElement('input');
        inputFake.setAttribute('value', url);
        document.body.appendChild(inputFake);
        inputFake.select();
        document.execCommand('copy');
        document.body.removeChild(inputFake);
        setTimeout(() => {
            btnCopy.textContent = 'Copy link'
        },800)
    })

    return {
        divButtons,
        btnClear,
        btnCopy
    };
}