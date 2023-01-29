$('[data-show="more"]').on('click', function (event) {
    event.preventDefault();
    if ($(this).attr('more-collapse') === 'false') {
        $(this).attr('more-collapse', 'true');
        $(this).prev('.choose__more-text').removeClass('hide');
        $(this).text('less');
    } else {
        $(this).text('Show more');
        $(this).attr('more-collapse', 'false');
        $(this).prev('.choose__more-text').addClass('hide');
    }
});