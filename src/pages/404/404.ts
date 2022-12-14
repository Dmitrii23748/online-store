export const addErorPage = () => {
    const error = `
        <h1>404 pageSczfzf</h1>
    `;

    const divMain = document.createElement('div');
    divMain.innerHTML = error;
    return divMain;
}