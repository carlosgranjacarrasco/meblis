//Toggle Icon

let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuIcon.onclick = () =>{ //When you click on the icon menu the icon will turn in an x (if you want to exit that menu) and the class list will show
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

//Remove Icone and navbar when a section is clicked
navbar.onclick = () =>{ // = () ==> is an abreviation to let navbar.onclick = function (){
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

//Scroll Reveal

ScrollReveal({
    //reset:true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", {origin:"top"});
ScrollReveal().reveal(".home-img, .knowledge, .portfolio-box, .contact form", {origin:"bottom"});
ScrollReveal().reveal(".home-content h1", {origin:"left"});

//Send Email

function sendEmail(){
    Email.send({
        SecureToken : "0bb93878-91e7-43f3-a064-999535e261d7",
        To : 'meblis@hotmail.com',
        From : "carlosgranjacarrasco@gmail.com",
        Subject : "Meblis",
        Body : "Nombre: " + document.getElementById("name").value
        + "<br> Apellido: " + document.getElementById("surname").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Teléfono: " + document.getElementById("phone").value 
        + "<br> Mensaje: " + document.getElementById("message").value
    }).then(
      message => alert("Se ha enviado su email correctamente")
    );
    
}
