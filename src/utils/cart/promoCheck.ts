import { IPromo } from "../interface";
import { appendPromo } from "./promoAppend";

export function checkPromo(e: Event):void {
  const target = e.target as HTMLInputElement;
  const value: string = target.value;
  const promocodes: IPromo = JSON.parse(window.localStorage.getItem('promocodes') as string);

  if(promocodes[value]) appendPromo(value, promocodes)
}