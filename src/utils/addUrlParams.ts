// export const addUrlParams = (paramKey: string, paramValue: string) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set(paramKey, paramValue);
//     window.history.replaceState({}, '', `${location.pathname}?${params}`);
// }

// export const deleteUrlParams = (paramKey: string) => {
//     const params = new URLSearchParams(window.location.search);
//     params.delete(paramKey);
//     window.history.replaceState({}, '', `${location.pathname}${location.hash}`);
// }



 export const addClassProducts = (productsElem: HTMLDivElement) => {
    if(window.location.hash === '#/?table=small') {
        productsElem.classList.add('products-cards-big');        
    } else if(window.location.hash === '#/?table=big') {
        productsElem.classList.remove('products-cards-big');
    }
 }

 export const addClassListDesc = (listElem: HTMLUListElement) => {
    if(window.location.hash === '#/?table=small') {
        listElem.classList.add('none'); 
    }
 }