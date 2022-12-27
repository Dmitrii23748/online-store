import { IProducts } from "../interface";

export function setButtonText(id: number): string {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string) as Array<IProducts>;
  const idArray: Array<Number> = [];
  currentItems.forEach((element: IProducts) => {
    idArray.push(element.id);
  });

  if (idArray.includes(id)) return 'Remove from cart';
  else return 'Add to cart';
}