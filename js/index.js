import { getInputsRangeToPutToolTips } from "./input-range.js";
import getNode from "./utils/get_elements";
import "./modal";


window.addEventListener("load", (e) => {
  getNode("loader").style.display = "none";
  getInputsRangeToPutToolTips();
  
});
