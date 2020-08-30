// utils
import getNode, { getQueryAllNode } from "./utils/get_elements";
import toggle_modal from "./utils/toggle_modal";

window.addEventListener(
  "load",
  () => {
    const all_btn_modals = getQueryAllNode("[data-modal]");

    all_btn_modals.forEach((btn_modal) => {
      // get id of modal for button action
      const modal_id = btn_modal.getAttribute("data-modal");

      const btns_exit_modal = [
        ...getQueryAllNode(`#${modal_id} *[data-close='${modal_id}']`),
      ];

      btns_exit_modal.forEach((btn_exit_modal) => {
        toggle_modal(btn_exit_modal, modal_id);
      });
      
      toggle_modal(btn_modal, modal_id);

    });
  },
  false
);
