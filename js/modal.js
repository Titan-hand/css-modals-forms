// utils
import getNode from "./utils/get_id";
import toggle_modal from "./utils/toggle_modal";

window.addEventListener(
  "load",
  () => {
    const all_btn_modals = document.querySelectorAll("[data-modal]");

    all_btn_modals.forEach((btn_modal) => {
      const modal_id = btn_modal.getAttribute("data-modal");

      const btn_close_modal = getNode(modal_id).querySelector(
        ".modal__button-close"
      );

      toggle_modal(btn_modal, modal_id);
      toggle_modal(btn_close_modal, modal_id);
    });
  },
  false
);
