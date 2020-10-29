jQuery(document).ready(function($){
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('.nav-element a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});