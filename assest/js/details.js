//show few detail
let showMore = document.getElementById('show-more-details');
let showFew = document.getElementById('show-few-detail');
let table = document.getElementById('detail-table');
var l = false;
showMore.addEventListener('click', () => {
    table.style.display = '';
});


showFew.addEventListener('click', () => {
    table.classList.toggle('details-style');
    if (!l) {
        showFew.innerHTML = 'عرض اكثر';

        l = true

    } else {
        showFew.innerHTML = 'عرض اقل'

        l = false;
    }


});