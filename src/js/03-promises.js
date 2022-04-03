import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector("input[name='delay']");
const stepEl = document.querySelector("input[name='step']");
const amountEl = document.querySelector("input[name='amount']");

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
  evt.preventDefault();
 
  let delay = parseInt(delayEl.value);
  let step = parseInt(stepEl.value);
  let amount = parseInt(amountEl.value);
  
  promise({delay, step, amount});
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = {position, delay};

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    } else { 
    reject(promiseValue);
    }
  })
}

function promise({delay, step, amount}) {
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay)
      })
      .catch(({ position, delay }) => { 
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay) 
      });
  delay += step;
  }
}