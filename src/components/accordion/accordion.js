$(function() {
    $(".accordion-item__title").on('click', function(e) {
            if($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
            }
            else {
                $(this).parent().addClass('active');
            }
    });
});