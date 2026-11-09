const utilsateur = {
   
    nom: "Karim Benali",
    email: "karim@exemple.com",
    role: "Administrateur",
}








const userName = document.querySelector("#user-name");

userName.textContent = utilsateur.nom


const userEmail = document.querySelector("#user-email");

userEmail.textContent = utilsateur.email

const userRole = document.querySelector("#user-role");

userRole.textContent = utilsateur.role
