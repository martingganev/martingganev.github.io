$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        var $brand = $(".navbar-brand");
        var $img = $("#baseImage");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $img.height());
    });  
    $(function() {
        var links = $(".nav-link").click(function() {
            links.removeClass("active");
            $(this).addClass("active");
        });
     });
});