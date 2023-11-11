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


const scrollers = document.querySelectorAll('.scroller');

scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector('.scroller_inner');
    const scrollerContent = Array.from(scrollerInner.children);
    let scrollerInnerWidth = scrollerInner.getBoundingClientRect().width;
    let windowWidth = window.innerWidth;
    let numberOfDuplicates = 1;
    while (scrollerInnerWidth < windowWidth * 2 || numberOfDuplicates < 2) {
        numberOfDuplicates++;
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.classList.add('duplicated');
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerInnerWidth = scrollerInner.getBoundingClientRect().width;
    }
    scrollerInner.style.setProperty('--duplicates', numberOfDuplicates);
});


