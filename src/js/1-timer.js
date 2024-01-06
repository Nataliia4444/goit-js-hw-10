import flatpickr from 'flatpickr';
// import 'flatpickr/dist/themes/dark.css';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
let userSelectedDate = null;

//* REFERENSE
const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

//* DISABLED BUTTON
refs.btnStart.disabled = true;

//* OPTIONS FOR FLATPICKER
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dataNow = Date.now();
    if (dataNow > selectedDates[0].getTime()) {
      refs.btnStart.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        timeout: 2000,
        theme: 'dark',
        position: 'topRight',
      });
    } else {
      refs.btnStart.disabled = false;
      userSelectedDate = selectedDates[0].getTime();
    }
  },
};

//* FLATPICKR
flatpickr(refs.input, options);

//*CLICK ON THE START BUTTON
refs.btnStart.addEventListener('click', OnClickBtnStart);
function OnClickBtnStart() {
  refs.btnStart.disabled = true;
  setInterval(() => {
    const currentTime = Date.now();
    const difference = userSelectedDate - currentTime;
    const result = convertMs(difference);

    refs.days.textContent = result.days;
    refs.hours.textContent = result.hours;
    refs.minutes.textContent = result.minutes;
    refs.seconds.textContent = result.seconds;
  }, 1000);
}

// *CONVERT MS
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// *METHOD PADSTART
function pad(result) {
  return String(result).padStart(2, '00');
}
