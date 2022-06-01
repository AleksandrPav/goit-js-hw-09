
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
let timerId = null;
let deltaTime = null;
let timeToFinish = null;
const curentDate = new Date();

console.log(refs);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


flatpickr(refs.input, {options});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
