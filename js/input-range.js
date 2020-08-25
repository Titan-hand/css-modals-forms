// manage the tooltip in the input range
const addToolTip = (labelsArr) => {
    for (let i = 0; i < labelsArr.length; i++) {
        // get input range value
        const value = labelsArr[i].querySelector('input[type=range]').value;
        // create tooltip
        const div = document.createElement('div');
        div.classList.add('input-range-toolTip');
        div.textContent = value;

        labelsArr[i].append(div);
    }
}

const updateToolTipValue = ({target}, label) => {
    const { value } = target;
    const toolTip = label.querySelector('.input-range-toolTip');
    toolTip.textContent = value;
}

const getInputsRangeToPutToolTips = () => {
    // all labels with .input-range class
    const inputContainerRanges = [...document.querySelectorAll('label.input-range')];
    addToolTip(inputContainerRanges);
    
    inputContainerRanges.forEach( label => {
        const input = label.querySelector('input[type=range]');
        input.addEventListener('input', (ev) => updateToolTipValue(ev, label));
    })
}

export {
    getInputsRangeToPutToolTips
}