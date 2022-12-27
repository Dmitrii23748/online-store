import { IProducts } from "../interface";

export function checkItemInStorage(ID: number): boolean {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  let statement: boolean = false;
  currentItems.forEach((element: IProducts) => {
    if (element.id === ID) {
      statement = true;
    }
  });
  return statement;
}