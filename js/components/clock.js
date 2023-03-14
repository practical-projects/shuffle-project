class clock {
  constructor(selector) {
    this.selector = selector;
    this.DOM = null;
    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }
    this.DOM = document.querySelector(this.selector);
  }

  isValidSelector() {
    if (typeof this.selector !== "string" || this.selector === "") {
      console.error("Error: selector has to ");
    }
  }

  render() {
    const timeValues = [6, 50, 9, 49, 20];
    const titleValues = ["Months", "Days", "Hours", "Minutes", "Seconds"];
    let HTML = "";

    for (let i = 0; i < timeValues.length; i++) {
      HTML += `<div class="time">
           <div class="value">${timeValues[i]} </div>
           <div class="title">${titleValues[i]}</div>
         </div>`;
    }
  }
}
// function clock(selector) {
//   const DOM = document.querySelector(selector);
//   const timeValues = [6, 50, 9, 49, 20];
//   const titleValues = ["Months", "Days", "Hours", "Minutes", "Seconds"];
//   let HTML = "";

//   for (let i = 0; i < timeValues.length; i++) {
//     HTML += `<div class="time">
//         <div class="value">${timeValues[i]} </div>
//         <div class="title">${titleValues[i]}</div>
//       </div>`;
//   }

//   DOM.innerHTML = HTML;
// }

export { clock };
