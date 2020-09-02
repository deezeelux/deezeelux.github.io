const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach(field => {

        //пропадание класса с ошибкой
        //метод trim обрезает символы пробела из начала и конца строки
        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    modal.removeClass("error_modal");

    const isValid = validateFields(form, [name, phone, comment, to]);


    //валидация. Если в форме нет ошибок, то отправлять запрос
    if (isValid) {

        const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },

            error: data => {},
        });

        //done это аналог success (не/успешный ответ)
        request.done(data => {
            content.text(data.message);
        });

        //fail это аналог success (не/успешный ответ)
        request.fail(data => {
            const message = data.responseJSON.message;
            content.text(message);
            modal.addClass("error_modal");
        });

        //общий код-вызов модалки
        request.always(() => {
            $.fancybox.open({
                src: "#modal",
                type: "inline"
            });
        })
    }
});

//закрытие по клику на "закрыть"
$(".js-close-modal").click(e => {
    e.preventDefault();

    $.fancybox.close();
});