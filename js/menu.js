window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('.btn-menu').addEventListener('click', function () {
        document.querySelector('.menu').classList.toggle('is-active');
    });
});


window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('.product__title').addEventListener('click', function() {
        document.querySelector('.product__title').classList.toggle('bigger')
    });
});
