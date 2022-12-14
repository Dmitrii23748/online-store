export const addCartPage = () => {
    const divMain = document.createElement('div');
    const cartPage = document.createElement('h1');
    cartPage.textContent = 'Cart Page'
    divMain.append(cartPage);
    return divMain;
}