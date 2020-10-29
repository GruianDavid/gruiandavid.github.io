jQuery(document).ready(function($){

    //nano scroll init
    $(".nano").nanoScroller();

    //for smooth scroll on navigation click
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        //set active menu
        $('.nav-element a').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});