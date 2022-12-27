export function changeButton(target: HTMLElement, id: number):void {
  target.innerText === 'Add Cart' ? target.innerText = 'Remove from cart' : target.innerText = 'Add Cart';
}