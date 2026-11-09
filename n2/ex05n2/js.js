const liveInput = document.querySelector("#live-input");

const liveOutput = document.querySelector("#live-output");

document.body.appendChild(liveInput);

liveInput.addEventListener("keyup", (e) => {

  liveOutput.textContent = e.target.value;
 console.log(liveOutput);
 
});

