$('.js-open-modal').click(function(event) {

    var modalName = $(this).attr('data-modal');

    var modal = $('.js-modal[data-modal=" ' + modalName + ' "]');

    modal.addClass('is-show');
    $('.js-modal-overlay').addClass('is-show');
})

$('.js-modal-close').click(function() {
    $(this).parent('.js-modal').removeClass('is-show');
})

$('.js-modal-overlay').click(function(){
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
})

/*var linkArray = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-modal-overlay');

linkArray.forEach(function(item){

    item.addEventListener('click', function(event){

        var modalName = this.getAttribute('data-modal');
        var modal = document.querySelector('.js-modal[data-modal=" ' + modalName + ' "]');

        modal.classList.add('is-show');
        overlay.classList.add('is-show');

        overlay.classList.remove('is-show';)
    })
})*/
