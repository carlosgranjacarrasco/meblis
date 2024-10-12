let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Toggle the X icon for the menu
    navbar.classList.toggle("active"); // Toggle the active class for navbar visibility
};

// Remove icon and navbar when a section is clicked
navbar.querySelectorAll("a").forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("bx-x"); // Remove the X icon
        navbar.classList.remove("active"); // Hide the navbar
    };
});

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

let slideIndex = 0;
showSlides();

// Function to display the slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Function to manually change slides
function plusSlides(n) {
    slideIndex += n - 1; // Adjust index since showSlides increments it
    showSlides();
}

// Function to go to a specific slide
function currentSlide(n) {
    slideIndex = n - 1; // Adjust index since showSlides increments it
    showSlides();
}
