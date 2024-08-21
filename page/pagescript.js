document.querySelector('.learn-more').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector('.services').offsetTop,
        behavior: 'smooth'
    });
});