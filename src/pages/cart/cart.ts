export const addCartPage = () => {
    const cart = `
        <h1>Cart page</h1>
    `;
    const divMain = document.createElement('div');
    divMain.innerHTML = cart;
    return divMain;
}