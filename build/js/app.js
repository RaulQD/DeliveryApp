/* ======  MENU MOBILE ======*/
const showMenu = (toggleID, navID, closeID) => {
    const toggle = document.getElementById(toggleID)
    const nav = document.getElementById(navID)
    const close = document.getElementById(closeID)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('show');
        })
    }
}
showMenu('menu-toggle', 'nav-menu', 'menu-close')

/*============ SCROLL HEADER ======== */

function scrollHeader() {
    const header = document.querySelector('#header');

    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ======== REMOVE MENU MOBILE ======= */
const navLinks = document.querySelectorAll('.menu__links')
function activeLinks() {
    navLinks.forEach(n => {
        n.classList.remove('menu__links--active')
        this.classList.add('menu__links--active');
        const navMenu = document.querySelector('#nav-menu')
        navMenu.classList.remove('show');
    })
}
navLinks.forEach(n => n.addEventListener('click', activeLinks));
/* ============== ACIVE LINK ===========*/

const section = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionID = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('a[href*=' + sectionID + ']').classList.add('menu__links--active');
        } else {
            document.querySelector('a[href*= ' + sectionID + ']').classList.remove('menu__links--active')
        }
    })
}
window.addEventListener('scroll', scrollActive);