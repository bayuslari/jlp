// Write in JSON
var app = {
    init: function() {
        app.navbarChange();
        app.submenuNormalize();
        app.textForm();
        app.datePick();
        app.materiSelect();
    },
    resize: function() {

    },
    navbarChange: function() {
        jQuery('#menu-toggle').click(function() {
            jQuery('body').toggleClass('sm-nav');
        });
    },
    submenuNormalize: function() {
        jQuery(document).click(function(event) {
            if (!jQuery(event.target).closest('.side-nav li').length) {
                jQuery(".sm-nav .side-nav li , .side-nav li a").removeClass('active');
                jQuery(".sm-nav .collapsible-body").css("display", "none")
            }
        })
    },
    textForm: function() {
        var simplemde = new SimpleMDE({ element: jQuery("#text-form")[0] });
    },
    datePick: function() {
        jQuery('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 40,
            min: new Date(1990, 0, 1),
            max: new Date(2000, 11, 31),
            closeOnSelect: true,
        });
        jQuery("#dob").click(function(event) {
            event.stopPropagation();
            jQuery(".datepicker").first().pickadate("picker").open();
        });
    },
    materiSelect: function() {
        jQuery(document).ready(function() {
            jQuery('select').material_select();
        });
    },
};

jQuery(document).ready(function($) {
    app.init();
    $(window).on("resize", function() {
        app.resize();
    });
});
