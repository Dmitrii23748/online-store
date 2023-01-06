import { addModalForm } from "./addForm";
import { deleteModal } from "./deleteModal";

export function addModal(): void {
  const page = document.querySelector('.page') as HTMLElement;

  const modalWrapper: HTMLElement = document.createElement('div');
  modalWrapper.classList.add('wrapper-modal');
  modalWrapper.addEventListener('click', deleteModal);

  modalWrapper.append(addModalForm());

  page?.prepend(modalWrapper);
}