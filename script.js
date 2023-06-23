const data = Array.from(document.querySelectorAll('span[data-pro]'));
data.map(el => {
    let range = el.dataset.pro;
    el.style.width = range + '%';
});
const button = document.getElementsByClassName('btn')[0];
this.addEventListener('scroll', function() {
    if(this.scrollY >= 400) {
        button.style.bottom = '20px';
    } else {
        button.style.bottom = '-50px';
    }
})