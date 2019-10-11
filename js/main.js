$(document).ready(function() {
    const $topOfOtheDiv = $("#sticky-show").offset().top;
    const $stickyNav = $('#sticky-hide');
    const $window = $(window);
    $(window).scroll(function() {
        if($window.scrollTop() > $topOfOtheDiv) {
            $stickyNav.addClass("show");
        }
    });
});