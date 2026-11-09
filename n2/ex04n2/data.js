const imageUrl = "/images/paysage.png";
const container = document.getElementById("image-container");
const img = document.createElement("img");

img.setAttribute("src", imageUrl);
img.setAttribute("alt", "Lac de montagne au lever du soleil");
img.classList.add("rounded-img");

// const resule = img.getAttribute("alt")

// console.log(resule);



container.appendChild(img);

img.addEventListener("load", () => {
    console.log("Image chargée !");
});

img.addEventListener("error", () => {
    console.log("Erreur : image introuvable !");
});



// const img = document.getElementById("photo");
// img.setAttribute("src", "new.png");

// const source = img.getAttribute("src");

// console.log(source);
