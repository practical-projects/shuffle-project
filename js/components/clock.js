function clock(selector) {
  const DOM = document.querySelector(selector);
  const timeValues = [50, 9, 49, 20];
  const titleValues = ["Days", "Hours", "Minutes", "Seconds"];
  let HTML = "";

  for (let i = 0; i < timeValues.length; i++) {
    HTML += `<div class="time">
        <div class="value">${timeValues[i]} </div>
        <div class="title">${titleValues[i]}</div>
      </div>`;
  }

  DOM.innerHTML = HTML;
}

export { clock };
