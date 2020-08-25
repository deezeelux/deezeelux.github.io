const findBlockByAlias = (alias) => {
    return $(".reviews__disp-item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
};

$(".interact-avatar__link").click(e=> {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switch-item");

    itemToShow.addClass("active").siblings().removeClass("active");
    //добавить и удалить класс active
    curItem.addClass("active").siblings().removeClass("active");
});