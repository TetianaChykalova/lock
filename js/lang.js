$(function() {
    $(".nav__select-control").click(function(){
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function(){
            $('.nav__select ul').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function(e){
        if (!$(e.target).closest('.nav__select').length){
            $('body').removeClass('body_pointer');
            $('.nav__select ul').slideUp(200);
        }
    });
});