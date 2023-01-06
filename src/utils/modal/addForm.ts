export function addModalForm(): HTMLElement {
  const Form = document.createElement('form');
  Form.classList.add('modalform__body');

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
  sendButton.type = 'button';
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
  block.placeholder = 'Write full name'

  return block;
}

function createPhoneField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'tel';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'Phone number'

  return block;
}

function createAddressField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'Address for delivery'

  return block;
}

function createMailField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'email';
  block.classList.add('modalform__field');
  block.required = true;
  block.placeholder = 'E-mail';

  return block;
}

function createCardNumberField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'Card Number'

  return block;
}

function createDateField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'Valid through'

  return block;
}

function createCVVField(): HTMLElement {
  const block = document.createElement('input');
  block.type = 'text';
  block.classList.add('modalform__field');
  block.classList.add('modalform__field_card');
  block.required = true;
  block.placeholder = 'CVV'

  return block;
}