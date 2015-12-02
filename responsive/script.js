
$(document).ready(function(){
    maxWindow = parseInt(screen.width);
    minColorR = 255;
    minColorG = 230;
    minColorB = 20;

    endColorR = 255
    endColorG = 65
    endColorB = 15

    responsiveColor();

    $(window).resize(function() {
        responsiveColor();
    });

    function responsiveColor(){
        windowWidth = parseInt($(window).width());

        windowR = minColorR+(Math.round((windowWidth/maxWindow)*(endColorR-minColorR)));
        windowG = minColorG+(Math.round((windowWidth/maxWindow)*(endColorG-minColorG)));
        windowB = minColorB+(Math.round((windowWidth/maxWindow)*(endColorB-minColorB)));

        console.log(windowR);
        $('body').css('background-color','rgb(' + windowR + ',' + windowG + ',' + windowB +')')
    }

});