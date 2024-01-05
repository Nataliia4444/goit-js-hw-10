import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//* REFERENSE
const refs = {
  form: document.querySelector('form'),
};

//*CLICK ON THE BUTTON 'CREATE NOTIFICATION'
refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();

  const delay = e.currentTarget.elements.delay.value;
  const state = e.currentTarget.elements.state.value;

  createPromise(delay, state)
    .then(({ delay }) => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: 2000,
        theme: 'dark',
        position: 'bottomCenter',
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'bottomCenter',
        timeout: 2000,
      });
    });
}
// *CREATE PROMISE
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve({ delay });
      } else if (state === 'rejected') {
        reject({ delay });
      }
    }, delay);
    refs.form.reset();
  });
}
