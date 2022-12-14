export const addErorPage = () => {
    const divMain = document.createElement('div');
    const errorPage = document.createElement('h1');
    errorPage.textContent = '404 NOT FOUND'
    divMain.append(errorPage);
    return divMain;
}