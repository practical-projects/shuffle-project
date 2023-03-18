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
    this.updateClock();
  }

  isValidSelector() {
    if (typeof this.selector !== "string" || this.selector === "") {
      console.error("ERROR: selector has to be non-empty string");
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
    const updatedTime = [];

    for (let i = 0; i < timeValues.length; i++) {
      const time = timeValues[i];
      if (i === 0 || time > 9) {
        // originalus tekstas
        updatedTime.push(time);
      } else {
        // pridedam 0 prieki
        updatedTime.push("0" + time);
      }
    }

    return updatedTime;
  }

  calcDeadline() {
    // dabartinis laikas
    const now = new Date();
    // einamieji metai
    const todayYear = now.getFullYear();
    // numanoma data
    let concertTime = todayYear + "-" + this.targetDate;
    // numanomas laikas
    let concertDate = new Date(concertTime);
    // dabartines milisekundes
    const nowMiliseconds = now.getTime();
    // numanomos milisekundes
    let futureMiliseconds = concertDate.getTime();

    if (nowMiliseconds > futureMiliseconds) {
      concertTime = todayYear + 1 + "-" + this.targetDate;
      concertDate = new Date(concertTime);
      futureMiliseconds = concertDate.getTime();
    }
    // likusios milisekundes
    const remainingMiliseconds = futureMiliseconds - nowMiliseconds;
    // likusios sekundes
    let remainingSeconds = Math.floor(remainingMiliseconds / 1000);

    const days = Math.floor(remainingSeconds / 60 / 60 / 24);
    remainingSeconds -= days * 60 * 60 * 24;

    const hours = Math.floor(remainingSeconds / 60 / 60);
    remainingSeconds -= hours * 60 * 60;

    const minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds -= minutes * 60;

    return [days, hours, minutes, remainingSeconds];
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
    const labelValues = ["Days", "Hours", "Minutes", "Seconds"];
    let HTML = "";

    for (let i = 0; i < timeValues.length; i++) {
      HTML += `<div class="time">
                      <div class="value">${timeValues[i]}</div>
                      <div class="label">${labelValues[i]}</div>
                  </div>`;
    }

    this.DOM.innerHTML = HTML;
    this.allValuesDOM = this.DOM.querySelectorAll(".value");
  }
}

export { clock };
