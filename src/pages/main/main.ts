export const addMainPage = () => {
    const main = `
        <h1>Main page</h1>
    `;

    const divMain = document.createElement('div');
    divMain.innerHTML = main;
    return divMain;
}