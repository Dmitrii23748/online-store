import { IProducts } from "./interface"
export const saveLocal = (arr:IProducts[] ) => {
    localStorage.setItem('mainData', JSON.stringify(arr));
}


export const saveLocalMin = (str: string, name: string) => {
    localStorage.setItem(name, str);
}

export const saveLocalMax = (str: string, name: string ) => {
    localStorage.setItem(name, str);
}


export const printLocalMin = (name: string) => {
    return localStorage.getItem(name);
}

export const printLocalMax = (name: string) => {
    return localStorage.getItem(name);
}