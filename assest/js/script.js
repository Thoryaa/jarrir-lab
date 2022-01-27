let menubar = document.getElementById('menu-bar');
let menubarClose = document.getElementById("cancel-btn");
let menubarLogInIconBtn = document.getElementById('menu-bar-login-btn-icon');
let menuSymbol = document.getElementById('symbol-of-menu');
//login form
let logb = document.getElementById('log-in-btn');
let loginForm = document.getElementById('log-in-form');
//btn of login also
let logInToo = document.getElementById('log-in-too');
//sing up btn
let signup = document.getElementById('sign-up');

//sing up form
let signForm = document.getElementById("sign-up-container");

/**open and close menu for phone and desktop */
menuSymbol.addEventListener('click', openmenu);
menubarClose.addEventListener('click', closenmenu);

function openmenu() {
    menubar.classList.toggle('menu-bar-active');

}

function closenmenu() {
    menubar.classList.add('close-menu-bar');
    AllSignLog.style.visibility = 'hidden';
    loginForm.style.visibility = 'hidden';

}
//btn of login and sign up in menu bar
let menuBtnLogSign = document.getElementById('menu-bar-login-btn-icon');
//btn of login and sign up in menu bar-Disktop-
let menuDeskLogSign = document.getElementById('log-in-and-sign-up-icon');
//all of-log-in-and-sing-up-container
let AllSignLog = document.getElementById('all-of-log-in-and-sing-up-container');
//open all form
menuDeskLogSign.addEventListener('click', openAllSL);
menuBtnLogSign.addEventListener('click', openAllSL);

function openAllSL() {
    AllSignLog.classList.toggle('all-of-log-in-and-sing-up-container-active');

}

//open log in form
logb.addEventListener("click", openLoginForm);
logInToo.addEventListener("click", () => {
    openLoginForm();
    this.style.visibility = 'hidden';
});

function openLoginForm() {
    loginForm.classList.toggle('log-in-form-active');
}
//open sign up form
signup.addEventListener('click', openSignF);
document.getElementById('show-sign-up').addEventListener('click', () => {
    if (loginForm == open) {
        loginForm.close();
    }
    openSignF();
});
//slider
const dots = document.querySelectorAll(".btn-slid-container button");
const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 13; // total
function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "gray";
    });
    document.querySelector(".btn-slid-container button:nth-child(" + num + ")").style.backgroundColor = "#f2f2f2";
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}

function openSignF() {
    signForm.classList.toggle('sign-form-active');
}

document.getElementById('add-to-cart').addEventListener('click', openwin);
let coun = 0;

function openwin() {
    window.open('../html/saling-form.html', '_self');
    coun = coun + 1;
    document.cookie.setItem('cart-count', coun);
    sessionStorage.setItem('cart-count', coun);
    document.getElementById('cart-coun').innerHTML = coun;
    document.getElementById('cart-cou').innerHTML = coun;
}
//
document.getElementById('cartt').addEventListener('click', opencart);

function opencart() {
    window.open('../html/cart.html', '_blank');
}
document.getElementById('jarir-logo').style.cursor = 'pointer';
document.getElementById('harir-logo').style.cursor = 'pointer';

document.getElementById('harir-logo').addEventListener('click', home);
document.getElementById('jarir-logo').addEventListener('click', home);

function home() {
    window.open('../../index.html', '_blank');
}