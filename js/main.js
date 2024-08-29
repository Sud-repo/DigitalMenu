(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    $(document).ready(function() {
        // Initially hide the hover menu
        $('.hover-menu').hide();
    
        $(window).scroll(function() {
            // Check if the window has been scrolled down 400px or more
            if ($(this).scrollTop() > 400) {
                // Show the hover menu
                $('.hover-menu').fadeIn();
            } else {
                // Hide the hover menu
                $('.hover-menu').fadeOut();
            }
        });
    });    


})(jQuery);

