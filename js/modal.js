// utils
import getNode from "./utils/get_id";
import toggle_modal from "./utils/toggle_modal";

window.addEventListener(
  "load",
  () => {
    const all_btn_modals = document.querySelectorAll("[data-modal]");

    all_btn_modals.forEach((btn_modal) => {
      // get id of modal for button action
      const modal_id = btn_modal.getAttribute("data-modal");

      // get the HTML button of modal with id: modal_id
      const btn_close_modal = getNode(modal_id).querySelector(
        ".modal__button-close"
      );

      toggle_modal(btn_modal, modal_id);
      toggle_modal(btn_close_modal, modal_id);
    });
  },
  false
);
