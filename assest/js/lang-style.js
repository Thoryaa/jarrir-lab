let a = document.getElementById('eng-lang');
let b = document.getElementById('m-eng');
a.addEventListener('click', changelang);
var lo = false;

function changelang() {
    var st = document.getElementsByTagName('link')[3];
    if (st.getAttribute('href') == 'AR.css') {
        st.setAttribute('href', 'EN.css');
    } else {
        st.setAttribute('href', 'AR.css');
    }
    if (!lo) {
        a.innerHTML = 'Arabic';
        b.innerHTML = 'Arabic';
        lo = true

    } else {
        a.innerHTML = 'English'
        b.innerHTML = 'English';
        lo = false;
    }
}