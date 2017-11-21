$(document).ready(function () {

    new WOW().init();

    $(".burger-nav").on("click", function () {
        $(".container nav ul").toggleClass("open");
    });

    $('.js-wp-2').waypoint(function (direction) {

        $('.js-wp-2').addClass('animated slideInUp');

    }, {
        offset: '70%'
    });

    // The waypoint method is followed by a callback funtion taking an argument of "direction"
    $('.js-wp-3').waypoint(function (direction) {

        // To the class ".js-wp-3" we are adding the animation classes of Animate.css
        $('.js-wp-3').addClass('animated fadeIn');

    }, {
        offset: '70%' // We are offsetting the delay of the animation
    });

    // After a delay of 2,3s the button will go down by 3 pixels
    $(".iphone-btn").delay(1000).animate( {bottom: "+=-3"}, 300);
    // After a delay of  0.3s the button will come up by 3 pixels
    $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 100);

});