class clock {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.DOM = null;
    this.allValuesDOM = null;
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

  calcDeadline() {
    const now = new Date();
    // dabartiniai metai
    const todayYear = now.getFullYear();
    // koncerto data
    let concertTime = todayYear + "-" + this.targetDate;
    // numatomas laikas
    let concertDate = new Date(concertTime);

    const nowMiliseconds = now.getTime();
    let futureMiliseconds = concertDate.getTime();

    if (nowMiliseconds > now) {
      concertTime = todayYear + 1 + "-" + this.targetDate;
      concertDate = new Date(concertTime);
      futureMiliseconds = concertDate.getTime();
    }

    const remainingMiliseconds = futureMiliseconds - nowMiliseconds;
    let remainingSeconds = Math.floor(remainingMiliseconds / 1000);

    const dienos = Math.floor(remainingSeconds / 60 / 60 / 24);
    remainingSeconds -= dienos * 60 * 60 * 24;

    const valandos = Math.floor(remainingSeconds / 60 / 60);
    remainingSeconds -= valandos * 60 * 60;

    const minutes = remainingSeconds / 60;
    remainingSeconds -= minutes * 60;

    return [dienos, valandos, minutes, remainingSeconds];
  }

  updateClock() {
    setInterval(() => {
      const timeValues = this.formatTime(this.calcDeadline());
      for (let i = 0; i < 4; i++) {
        this.allValuesDOM[i].innerText = timeValues[i];
      }
    }, 1000);
  }

  render() {
    const timeValues = this.formatTime(this.calcDeadline());
    const titleValues = ["Days", "Hours", "Minutes", "Seconds"];
    let HTML = "";

    for (let i = 0; i < timeValues.length; i++) {
      HTML += `<div class="time">
           <div class="value">${timeValues[i]} </div>
           <div class="title">${titleValues[i]}</div>
         </div>`;
    }
    this.DOM.innerHTML = HTML;
    this.allValuesDOM = this.DOM.querySelectorAll(".value");
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
