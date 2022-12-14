export const addMainPage = () => {
    const divMain = document.createElement('div');
    const mainPage = document.createElement('h1');
    mainPage.textContent = 'Main Page'
    divMain.append(mainPage);
    return divMain;
}