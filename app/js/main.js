$(function(){
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});