export function checkEmptyStorage() {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  if (currentItems == null) {
    window.localStorage.setItem('itemList', '[]');
  }

  const itemsOnPage = JSON.parse(window.localStorage.getItem('itemsOnPage') as string);
  if (itemsOnPage == null) {
    window.localStorage.setItem('itemsOnPage', '4');
  }
}