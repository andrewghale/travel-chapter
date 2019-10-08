$(document).ready( function() {
    var topOfOthDiv = $("#sticky-show").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) {
            $("#sticky-hide").addClass("show");
        }
        // else{
        //     $("#sticky-hide").fadeOut("slow");
        // }
    });
});