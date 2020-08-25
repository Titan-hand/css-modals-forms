import error_ref from "./error";
import getNode from "./get_id";

const show_modal = (modal_id) => {
  // check if the modal is active in the window
  const modal = getNode(modal_id);

  if (!modal) {
    error_ref(
      `\n\n⚠️ The container ´#${modal_id}´ don't exist in the DOM.\n`,
      "color: red;"
    );
  }

  if (modal.classList.contains("modal--active")) {
    modal.classList.remove("modal--active");
    modal.classList.add("modal--disabled");
    return;
  }

  // if it is active, disable the modal
  modal.classList.remove("modal--disabled");
  modal.classList.add("modal--active");
};

const toggle_modal = (btn, modal_id) => {
  btn.addEventListener("click", () => show_modal(modal_id), false);
};

export default toggle_modal;
