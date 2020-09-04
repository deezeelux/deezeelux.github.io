const sections = document.querySelectorAll('section'),
    maincontent = document.querySelector('.maincontent'),
    scrollMenu = document.querySelectorAll('.fixed-menu__item')
    let inScroll = false;

const performTransition = sectionEq => {
    const transitionIsOver = 1000,
        mouseInertion = 300;
    if (!inScroll) {

        inScroll = true;
        const position = sectionEq * -100;
        sections.forEach(ele => {
            if (ele.classList.contains('active')) {
                ele.classList.remove('active');
            }
        });

        sections[sectionEq].classList.add('active');
        maincontent.style.transform = `translateY(${position}%)`;
    }
    setTimeout(() => {

        inScroll = false;
        sections.forEach(ele => {
            if (ele.classList.contains('visible')) {
                ele.classList.remove('fixed-menu__item--active');
            }
        });

        scrollMenu.forEach(ele => {
            if (ele.classList.contains('fixed-menu__item--active')) {
                ele.classList.remove('fixed-menu__item--active');
            }
        });

        scrollMenu[sectionEq].classList.add('fixed-menu__item--active');
    }, transitionIsOver + mouseInertion);
}

const scrollToSection = direction => {

    let activeSection, i = 0,
        num;

    sections.forEach(ele => {
        if (ele.classList.contains('active')) {
            activeSection = ele;
            num = i;
        }
        i++;
    });

    const prevSection = activeSection.previousElementSibling;
    const nextSection = activeSection.nextElementSibling;
    if (direction === 'next' && nextSection) {
        performTransition(num + 1);
    }
    if (direction === 'prev' && prevSection) {
        performTransition(num - 1);
    }
}

window.addEventListener('wheel', e => {
    const deltaY = e.deltaY;
    if (deltaY > 0) {
        scrollToSection('next');
    }
    if (deltaY < 0) {
        scrollToSection('prev');
    }
});

$("[data-scroll-to]").click(e => { 
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`); 
    
    performTransition(reqSection.index());
});