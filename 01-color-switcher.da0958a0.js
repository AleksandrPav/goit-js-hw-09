var intervalId,refs={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}console.log(refs),refs.startBtn.addEventListener("click",(function(){intervalId=setInterval((function(){document.body.style.backgroundColor=getRandomHexColor()}),1e3)})),refs.stopBtn.addEventListener("click",(function(){clearInterval(intervalId)}));
//# sourceMappingURL=01-color-switcher.da0958a0.js.map
