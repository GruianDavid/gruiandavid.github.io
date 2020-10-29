jQuery(document).ready(function($){

    //nano scroll init
    $(".nano").nanoScroller();

    //for smooth scroll on navigation click
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        //set active menu
        $('.nav-element a').removeClass('active');
        $(this).addClass('active');

        $(".nano").nanoScroller({ scrollTo: $.attr(this, 'href') });
    });

    $(".nano-content").on('scroll', function() {
        let distanceFromTop = $(".nano-content").scrollTop(); 
        if (distanceFromTop > 50){
            $('.nav').addClass('filled');
        }else{
            $('.nav').removeClass('filled');
        }
        var currentTop = $(window).scrollTop();
        var elems = $('.section');
        elems.each(function(index){
          var elemTop 	= $(this).offset().top;
          var elemBottom 	= elemTop + $(this).height();
          if(currentTop >= elemTop && currentTop <= elemBottom){
            var id 		= $(this).attr('id');
            var navElem = $('a[href="#' + id+ '"]');
            $('.nav-element a').removeClass('active');
            navElem.addClass('active')
          }
        })
    }); 

});