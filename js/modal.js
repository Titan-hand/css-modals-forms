const getNode = (id) => document.getElementById(id);

const show_modal = () => {
    // check if the modal is active in the window
    const modal = getNode("modal");
    if (!modal) {
        throw new ReferenceError(
            `\n\n⚠️ The container ´#modal´don't exist in the DOM.\n`,
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

const assing_func = (element) => {
    element.addEventListener("click", show_modal, false);
};

window.addEventListener(
    "load",
    (event) => {
        const btn_show_modal = getNode("show-modal");
        const btn_hide_modal = getNode("close-modal");
        const btn_exit_modal = getNode("exit-modal");

        assing_func(btn_show_modal);
        assing_func(btn_hide_modal);
        assing_func(btn_exit_modal);
    },
    false
);
