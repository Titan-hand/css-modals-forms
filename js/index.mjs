import { initModal } from './modal.js';
import { getInputsRangeToPutToolTips } from './input-range.js';

window.addEventListener('load', (event) => {
    initModal();
    getInputsRangeToPutToolTips();
})