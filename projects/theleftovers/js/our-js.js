$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('#navBar').removeClass('transparent')
} else {
$('#navBar').addClass('transparent');
}
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 750);
    return false;
});
