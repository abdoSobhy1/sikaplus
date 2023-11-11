const menuToggle = document.querySelector('.nav-btn');

const menu = document.querySelector('.nav-l');
const menuLinks = document.querySelector('.nav-l ul');

let showMenu = false;

menuToggle.addEventListener('click', function () {
    if (!showMenu) {
        showMenu = true;
        menu.classList.add('active');
        setTimeout(() => {
            menuLinks.classList.add('fade');
        }, 100);
    }
    else {
        showMenu = false;
        menuLinks.classList.remove('fade');
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300);
    }
});


const searchToggle = document.querySelector('.search-btn');

const search = document.querySelector('.search');

let showSearch = false;

searchToggle.addEventListener('click', function () {

    if (!showSearch) {
        showSearch = true;
        search.classList.add('active');
        menuLinks.classList.add('srch-vis');
    }
    else {
        showSearch = false;
        menuLinks.classList.remove('srch-vis');
        search.classList.remove('active');
    }

});


const scroller = document.querySelector('.scroller');

const scrollerInner = document.querySelector('.scroller_inner');

const scrollerContent = Array.from(scrollerInner.children);

scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.classList.add('duplicated');
    scrollerInner.appendChild(duplicatedItem);
});