import error_ref from "./error";
import getNode from "./get_elements";

const show_modal = (modal_id) => {
  // get HTML modal
  const modal = getNode(modal_id);

  // check if the modal is active in the window
  if (!modal) {
    error_ref(
      `\n\n⚠️ The container ´#${modal_id}´ don't exist in the DOM.\n`,
      "color: red;"
    );
  }

  if (modal.classList.contains("modal--active")) {
    modal.classList.remove("modal--active");
    modal.classList.add("modal--disabled");

    // stop all videos inside modal
    const modal_videos = [...modal.querySelectorAll("video")];
    const modal_videos_iframe = [...modal.querySelectorAll("iframe")];
    modal_videos.forEach((video) => video.pause());
    modal_videos_iframe.forEach((video) => (video.src = video.src));
    return;
  }

  // if it is active, disable the modal
  modal.classList.remove("modal--disabled");
  modal.classList.add("modal--active");
};

export default show_modal;
