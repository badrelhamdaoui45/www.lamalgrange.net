jQuery('document').ready(function($) {
    
    $("#main-content").append("<div class='de-upper-footer'></div>");
    
    var footer_height;
    if ( $('.et-l--footer').length > 0 ) {
        footer_height = $('.et-l--footer').innerHeight();
    } else {
        footer_height = $('#main-footer').innerHeight();
    }
    $('.de-upper-footer').css( 'height', footer_height );
    
    var window_height = $(window).height();
    var menu_height = $('.de-innerpage-menu-section').innerHeight();    
    var inner_header = parseFloat(window_height) - parseFloat(menu_height);    
    $('.de-inner-page-header').css('max-height',inner_header);

    $('.de-innerpage-menu a').on('click', function(e){
        var id = $(this).attr('href');
        $('.de-facility-slider').removeClass('de-facility-slider-visited');
        $(id).addClass('de-facility-slider-visited');
    });
    
    var page_url = window.location.href;
    var url = page_url.split('#');
    $('.de-innerpage-menu a[href="#'+url[1]+'"]').trigger('click');
});