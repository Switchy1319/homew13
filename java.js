const burgerIcon = document.getElementById('burgermenu');
const ra = document.querySelector('.relative');
burgerIcon.addEventListener('click', () => {
    ra.classList.toggle('ra-over-ojaxi');
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        ra.classList.remove('ra-over-ojaxi');
    }
});

