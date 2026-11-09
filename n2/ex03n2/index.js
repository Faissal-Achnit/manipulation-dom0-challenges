

const toggleBtn = document.querySelector("#toggle-btn");

   const details = document.querySelector("#details");


toggleBtn.addEventListener("click", () => {
     if(details.style.display === "none"){
       details.style.display = "block"
     }
     else{
        details.style.display = "none"
     }
})