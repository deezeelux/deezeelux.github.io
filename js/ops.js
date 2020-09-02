var sections = $("section");
var display = $(".maincontent");

sections.first().addClass("active");

const perfomTransition = sectionEq => {
    const position = sectionEq * -100;

    display.css({
        transform: `translateU(${position}%)`
    });

    sections.eq(sectionEq).addClass("active").siblings().removeClass("active")
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next") {
        perfomTransition(nextSection.index())
    }

    if (direction === "prev") {
        perfomTransition(prevSection.index())
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }

});