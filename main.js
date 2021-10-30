// alert ("hello!");

// MENU BUTTON
let menuButton = document.getElementById ("menu-button");

menuButton.addEventListener('click', () => {
    // console.log("Hello!");
    let menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
})



// CLOSE BUTTON
let closeButton = document.getElementById ("close");

closeButton.addEventListener('click', () => {
    // alert("OK");
    let menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
})
