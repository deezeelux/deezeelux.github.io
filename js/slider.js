const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: false,
});

$('.slider__left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$('.slider__right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});