import { setButtonText } from "./setButtonText";

export function changeButton(target: HTMLElement, id: number):void {
  target.innerText = setButtonText(id);
}