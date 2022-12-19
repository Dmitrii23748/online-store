import { IDB, IProducts } from "../interface";

export const checkEmpty = (items: Array<IProducts>): boolean => {
  if (items !== null) {
    return items.length == 0 ? true : false;
  } else {
    return true
  }
} 