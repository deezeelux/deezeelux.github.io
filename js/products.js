const mesureWidth = () => {
    return 500;
}

const closeEveryItemInContainer = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
}

const openItem1 = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth();

    item.addClass("active");
    hiddenContent.width(reqWidth);
}

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products__menu");

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container)
        openItem1(item);
    }

});

$(".products-menu__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($('.products__menu'));
})