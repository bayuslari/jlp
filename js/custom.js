// Write in JSON
var app = {
    init: function() {
        app.navbarChange();
    },
    resize: function(){

    },
    navbarChange: function() {
        jQuery('#menu-toggle').click(function() {
        	jQuery('body').toggleClass('sm-nav');
        });
    },
};

jQuery(document).ready(function($) {
    app.init();
    jQuery(window).on("resize", function() {
        app.resize();
    });
});