var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r={inputForm:document.querySelector(".form"),inputDealay:document.querySelector("[name='delay']"),inputStep:document.querySelector("[name='step']"),inputAmount:document.querySelector("[name='amount']")};console.log(r),r.inputForm.addEventListener("submit",(function(e){e.preventDefault();let t=Number(r.inputDealay.value),n=Number(r.inputAmount.value),o=Number(r.inputStep.value);function a(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}l=setTimeout((()=>{for(let e=0;e<n;e+=1){u=e+1;let n=t+o*e;a(u,n).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),n+=o}}),t)}));let u=0,l=null;
//# sourceMappingURL=03-promises.7e06a5ac.js.map