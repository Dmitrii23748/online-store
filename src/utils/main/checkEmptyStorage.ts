import { Promocodes } from "../../components/promocodes";

export function checkEmptyStorage() {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  if (currentItems == null) {
    window.localStorage.setItem('itemList', '[]');
  }

  const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);
  if (itemsOnPage == null) {
    window.localStorage.setItem('itemsOnPage', '4');
  }

  const promocodes = JSON.parse(window.localStorage.getItem('promocodes') as string);
  if (promocodes == null) {
    const promoJSON = JSON.stringify(Promocodes);
    window.localStorage.setItem('promocodes', promoJSON);
  }
}