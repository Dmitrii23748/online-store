export function checkCard(number: string):void {
  if (number[0] === '4') {
    addLogo('Visa');
  }
  else if (number[0] === '5') {
    addLogo('Mastercard');
  }
  else if (number[0] === '6') {
    addLogo('Maestro');
  }
  else {
    const image = document.querySelector('.modalform__card-image');
    if (image) deleteLogo();
  }
}

function addLogo(card: string):void {
  const img = document.querySelector('.modalform__card-image') as HTMLElement;
  if (!img) {
    const body = document.querySelector('.modalform__card-body');
    const image = document.createElement('img');
    image.classList.add('modalform__card-image');
    if (card === 'Maestro') image.src = '././assets/logo/maestro.jpg';
    if (card === 'Mastercard') image.src = '././assets/logo/mastercard.png';
    if (card === 'Visa') image.src = '././assets/logo/visa.png';
    body?.prepend(image);
  }
}

function deleteLogo():void {
  const image = document.querySelector('.modalform__card-image') as HTMLElement;
  image.remove();
}