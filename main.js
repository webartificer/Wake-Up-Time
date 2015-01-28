$(document).on('ready', function() {





    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    var theTime = hours + ":" + minutes;

    console.log(theTime);

    var container = $('<div class="container"></div>');
    var outerShell = $('<div class="outer-shell"></div>');
    var innerShell = $('<div class="inner-shell"></div>');
    var clockText = $('<div class="clockText blink">' + theTime + '</div>');
    var clockScreen = $('<div class="clockScreen">');

    $('body').append(container);
    container.append(outerShell);
    outerShell.append(innerShell);
    innerShell .append(clockScreen);
    clockScreen.append(clockText);


    $(window).resize(function () {
    // Get the current height of the div and save it as a variable.
        var width = clockText.width();
        // Set the font-size and line-height of the text within the div according to the current height.
        clockText.css({
            'font-size': (width) / 5
        });
    }).trigger('resize');









});
