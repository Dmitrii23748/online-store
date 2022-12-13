export const addErorPage = () => {
    const error = `
        <h1>404 page</h1>
    `;

    const divMain = document.createElement('div');
    divMain.innerHTML = error;
    return divMain;
}