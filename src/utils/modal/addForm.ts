import { addRouter } from "../../routes/routes";
import { updateHeader } from "../updateHeader";

export function addModalForm(): HTMLElement {
  const Form = document.createElement('form');
  Form.classList.add('modalform__body');
  Form.addEventListener('submit', sumbitForm)
  

  const titleDetails = createTitle('Personal details');
  const nameField = createNameField();
  const phoneField = createPhoneField();
  const addressField = createAddressField();
  const mailField = createMailField();

  const titleCard = createTitle('Credit card details');
  const cardBody = document.createElement('div');
  cardBody.classList.add('modalform__card-body');
  const cardNumber = createCardNumberField();
  const cardDate = createDateField();
  const cardCVV = createCVVField();
  cardBody.append(cardNumber, cardDate, cardCVV);

  const sendButton = document.createElement('input');
  sendButton.classList.add('modalform__button')
  sendButton.type = 'submit';
  sendButton.value = 'Send';

  Form.append(titleDetails, nameField, phoneField, addressField, mailField, titleCard, cardBody, sendButton);
  return Form;
}

function createTitle(title: string): HTMLElement {
  const block = document.createElement('label');
  block.classList.add('modalform__title');
  block.textContent = title;

  return block;
}

function createNameField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'Write full name';
  block.pattern = '(\\w{3,}\\s?){2,}';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("At least 2 words with 3 characters");
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createPhoneField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'tel';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'Phone number';
  block.pattern = '\\+\\d{9,}';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('Start with "+" and contains at least 9 numbers');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createAddressField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'Address for delivery';
  block.pattern = '(\\w{5,}\\s?){3,}';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('At least 3 words with 5 characters');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createMailField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'email';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'E-mail';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('Write email as "example@mail.com"');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createCardNumberField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'Card Number';
  block.pattern = '\\d{16}';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('Must contains 16 numbers');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createDateField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'Valid through';
  block.pattern = '(0[1-9]|1[0-2])\/?(0[1-9]|1[0-9]|2[0-9]|3[0-1]$)';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('Write in style "12/31"');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function createCVVField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'CVV';
  block.pattern = '\\d{3}';
  block.oninvalid = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity('Must contains 3 numbers');
  }
  block.oninput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");
  }

  return block;
}

function sumbitForm(e: Event):void {
  const target = e.target as HTMLFormElement;
  if (!target.isValid) {
    e.preventDefault();
    finishCart();
  }
}

function finishCart():void {
  const button = document.querySelector('.modalform__button');
  button?.after(createTitle('Succesfully ordered'));

  setTimeout(() => {
    window.localStorage.setItem('itemList', '[]');
    window.localStorage.setItem('itemsOnPage', '4');
    window.localStorage.setItem('usedPromo', '[]');
    updateHeader();
    window.location.href = "#/";
  }, 5000)
}