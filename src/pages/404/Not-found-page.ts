export const addErrorPage = () => {
    const divMain = document.createElement('div');
    const errorPage = document.createElement('h1');

    divMain.classList.add('wrapper_404');
    errorPage.textContent = 'PAGE NOT FOUND (404)';

    divMain.append(errorPage);
    return divMain;
}