$('#showBtn').on('click', function () {
    $('.menu').removeClass('hide').addClass('show');
    showMenu();
})
$('#closeBtn').on('click', function () {
    $('.menu').removeClass('show').addClass('hide');
    showMenu();
})
$(window).resize(showMenu);
function showMenu () {
    var width = $(window).innerWidth();
    if (width < 992 && $('.menu').hasClass('show')) {
        $('body').css({'overflow': 'hidden'});
    } else {
        $('body').css({'overflow-x': 'hidden',
                        'overflow-y': 'auto'});             //终于知道官方为什么一开始要overflow-x:hidden了，重新理解了body的overflow
    }
}
