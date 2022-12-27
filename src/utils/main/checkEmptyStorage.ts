export function checkEmptyStorage() {
  const currentItems = JSON.parse(window.localStorage.getItem('itemList') as string);
  if (currentItems == null) {
    window.localStorage.setItem('itemList', '[]')
  }
}