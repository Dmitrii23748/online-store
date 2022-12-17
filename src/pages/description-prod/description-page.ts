export const addDescriptionPage = () => {
    const divDesc = document.createElement('div');
    const descriptionPage = document.createElement('h1');
    descriptionPage.textContent = 'Описание одного продукта'
    divDesc.append(descriptionPage);
    return divDesc;
}