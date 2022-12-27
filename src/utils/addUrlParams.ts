
 export const addClassListElem = (listElem: HTMLElement) => {
    let hash = window.location.hash;
    if(hash.includes('small')){
        listElem.classList.add('none');
    }
 }

 export const addClassDivElem = (divElem: HTMLElement) => {
    let hash = window.location.hash;
    if(hash.includes('small')){
        divElem.classList.add('products-cards-big');
    }
 }


 export const addUrlLocal = () => {
    let tableLoc = localStorage.getItem('table') || '';
    let sortLoc = localStorage.getItem('valueInput') || '';
    let inputLoc = localStorage.getItem('sortOption') || '';

    let str = `#/table=${tableLoc}sort=${sortLoc}input=${inputLoc}`
    console.log(str);
 }
