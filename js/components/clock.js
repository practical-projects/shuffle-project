class clock {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.DOM = null;
    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }
    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== "string" || this.selector === "") {
      console.error("Error: selector has to be non-empty string");
      return false;
    }
    this.DOM = document.querySelector(this.selector);
    if (!this.DOM) {
      console.error("could not find element");
      return false;
    }
    return true;
  }

  formatTime(timeValues) {
    const updateTime = [];
    for (let i = 0; i < timeValues.length; i++) {
      const time = timeValues[i];
      if (i === 0 || time > 9) {
        updateTime.push(time);
      } else {
        updateTime.push("0" + time);
      }
    }
    return updateTime;
  }

  render() {
    const timeValues = this.formatTime([6, 50, 9, 49, 20]);
    const titleValues = ["Months", "Days", "Hours", "Minutes", "Seconds"];
    let HTML = "";

    for (let i = 0; i < timeValues.length; i++) {
      HTML += `<div class="time">
           <div class="value">${timeValues[i]} </div>
           <div class="title">${titleValues[i]}</div>
         </div>`;
    }
    this.DOM.innerHTML = HTML;
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
