

jQuery(document).ready(function ($) {
    setInterval(function () {
        moveRight();
    }, 5000);


    var slideCount = $('#txtSlide ul li').length;
    var slideWidth = $('#txtSlide ul li').width();
    var slideHeight = $('#txtSlide ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#txtSlide').css({ 'max-width': slideWidth, height: slideHeight });

    $('#txtSlide ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#txtSlide ul li:last-child').prependTo('#txtSlide ul');

    function moveLeft() {
        $('#txtSlide ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#txtSlide ul li:last-child').prependTo('#txtSlide ul');
            $('#txtSlide ul').css('left', '');
        });
    };

    function moveRight() {
        $('#txtSlide ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#txtSlide ul li:first-child').appendTo('#txtSlide ul');
            $('#txtSlide ul').css('left', '');
        });
    };

    $('#tetmnLeft').click(function () {
        moveLeft();
    });

    $('#tetmnRight').click(function () {
        moveRight();
    });

});

/**
 * Created by AVINASH on 5/29/2017.
 */
