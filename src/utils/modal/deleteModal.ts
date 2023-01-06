export function deleteModal(e: Event):void {
  const target = e.target as HTMLElement;
  const modal = document.querySelector('.wrapper-modal') as HTMLElement;

  if (target.classList.contains('wrapper-modal')) modal?.remove();
}