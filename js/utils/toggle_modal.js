import show_modal from './show_modal';

const toggle_modal = (btn, modal_id) => {
  btn.addEventListener("click", () => show_modal(modal_id), false);
};

export default toggle_modal;
