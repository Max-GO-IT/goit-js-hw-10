import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";const e={startBtn:document.querySelector("[data-start]"),datetimePicker:document.querySelector("#datetime-picker"),timer:document.querySelector(".timer"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u=null,d=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0];n<new Date?(y.show({title:"",message:"Please choose a date in the future"}),e.startBtn.disabled=!0):(u=n,e.startBtn.disabled=!1)}};h(e.datetimePicker,f);e.startBtn.addEventListener("click",S);function S(){e.startBtn.disabled=!0,e.datetimePicker.disabled=!0,d=setInterval(()=>{const t=Date.now(),n=u-t;if(n<0){clearInterval(d);return}const{days:s,hours:a,minutes:c,seconds:r}=k(n);e.days.textContent=o(s),e.hours.textContent=o(a),e.minutes.textContent=o(c),e.seconds.textContent=o(r)},1e3)}function k(t){const r=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:l,seconds:m}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map