const nextbtn = document.getElementById('next-btn');
const prevbtn = document.getElementById('prev-btn');
const progres = document.getElementById('progress');
const steps = document.querySelectorAll('.circle'); /***to return array********/
const forms = document.querySelectorAll('.client-form-parts');
const form1 = document.getElementById('part1');
const form2 = document.getElementById('part2');
const form3 = document.getElementById('part3');
const form4 = document.getElementById('part4');
let index = -1;
nextbtn.addEventListener("click", function() {
    index++;

    if (index > steps.length) {
        index = steps.length;
    }
    steps.forEach((item, i) => {
        if (i <= index) {

            item.classList.add('active');
            forms.forEach((item, i) => {
                if (i == index) {
                    item.classList.add('active-form');
                    let x = index;
                } else if (i == index - 1) {
                    item.classList.remove('active-form');
                }
            });
        }



    });

});

prevbtn.addEventListener("click", function() {
    index--;

    steps.forEach((item, i) => {
        if (i > index) {

            item.classList.remove('active');

        }

    });

    forms.forEach((item, i) => {
        if (i == index + 1) {
            item.classList.remove('active-form');
        } else if (i == index)
            item.classList.add('active-form');



    });

});
let coun = 0;
document.getElementById('request-done').addEventListener('click', addcook);
/****************************************** */


function addcook() {
    coun = coun + 1;
    sessionStorage.setItem('cart-count', coun);
    document.getElementById('cart-coun').innerHTML = coun;
    document.getElementById('cart-cou').innerHTML = coun;

}