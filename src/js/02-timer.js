
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_red.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
  input: document.querySelector("#datetime-picker"),
  btnStart: document.querySelector("button[data-start]"),
  days: document.querySelector("span[data-days]"),
  hours: document.querySelector("span[data-hours]"),
  minutes: document.querySelector("span[data-minutes]"),
  seconds: document.querySelector("span[data-seconds]"),
}

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now(refs.input.value)) {
      Notify.failure('Please choose a date in the future');
      refs.btnStart.disabled = true;
  } else {
      refs.btnStart.disabled = false;
  }
  }

};


flatpickr(refs.input, options );


const timer = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const date = new Date(refs.input.value);
      const now = Date.now();
      const diff = date - now;
      const { days, hours, minutes, seconds } = convertMs(diff);
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
      if (diff <= 0) {
      clearInterval(this.intervalId);
  
      refs.days.textContent = "00";
      refs.hours.textContent = "00";
      refs.minutes.textContent = "00";
      refs.seconds.textContent = "00";
      Notify.success('Time is up');
      this.isActive = false;
      
    }
    
    }, 1000);
    
  
  
  },
  
}
refs.btnStart.addEventListener("click", timer.start);

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}