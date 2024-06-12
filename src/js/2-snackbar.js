import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then(value => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${value}ms`,
      });
    })
    .catch(value => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${value}ms`,
      });
    });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}