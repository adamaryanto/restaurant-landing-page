const navbarNav = document.querySelector
('.navbar-nav');
// Ketika menu di klik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};
// Klik diluar slidebar untuk menghilangkan nav
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
