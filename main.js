ScrollReveal({ reset: true, duration: 2000, })

ScrollReveal().reveal('.explorer-desktop', {origin:'left', distance: '200px'});
// ScrollReveal().reveal('.explorer-desktop', {origin:'left', distance: '200px'});
// ScrollReveal().reveal('.footer-icon-holder div img', {origin:'right'});
ScrollReveal().reveal('.explorer-mobile h1', {origin:'left', distance: '200px'});
ScrollReveal().reveal('.outro h2', {origin:'left', distance:'200px'});
ScrollReveal().reveal('.header-text-container div', {origin:'bottom'});
// ScrollReveal().reveal('.header-text-container button div', {origin:'right', delay:1500, scale:2});
// ScrollReveal().reveal('.heading, , {
//     origin: 'left',
//     distance: '100px',
//     duration: 2000

// });



var unavailablefeature = "This feature is not yet available, try again later 😀"



function dosomething() {
    alert(unavailablefeature)
}


var contact= "https://wa.me/message/SQWCD3JZAO36B1"
function callcharges() {
    alert("🔔 Local call rates apply")
}

function contactus() {
    window.open (contact)
}


// console.log(hamburgerdiv)

var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")


function kaisen() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}
