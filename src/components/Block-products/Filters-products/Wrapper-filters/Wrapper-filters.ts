export const createWrapperFilters = () => {
    const divWrapperFilters = document.createElement('div');
    divWrapperFilters.classList.add('wrapper-filters');

    const titleFilters = document.createElement('p');
    titleFilters.textContent = 'Разные фильтры, которые ещё появятся';
    divWrapperFilters.append(titleFilters);

    return divWrapperFilters;
}