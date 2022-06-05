import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputForm: document.querySelector(".form"),
  inputDealay: document.querySelector("[name='delay']"),
  inputStep: document.querySelector("[name='step']"),
  inputAmount: document.querySelector("[name='amount']"),
}


console.log(refs);




refs.inputForm.addEventListener("submit", onFormSubmit);
let position = 0;
let timerId = null;

function onFormSubmit(e) {
  
  e.preventDefault();
  let delay = Number(refs.inputDealay.value);
  let amount = Number(refs.inputAmount.value);
  let step = Number(refs.inputStep.value);
  
  timerId = setTimeout(() => {
    for (let i = 0; i < amount; i += 1) {
      position = i + 1;
     let s = delay + step * i;
      createPromise(position, s).then(({position, delay}) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({position, delay}) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      s += step;
    }
  }, delay);






  
  function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve({position, delay});
    // Fulfill
      } else {
    reject(({position, delay}));
    // Reject
  }
    }, delay);
  });
  return promise;
}
}











  
  
  