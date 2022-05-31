


const refs = {
    input: document.querySelector("#datetime-picker"),
}
console.log(refs);


flatpickr(refs.input, {options});



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};