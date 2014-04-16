'use strict'


$(document).on('ready', function() {

    var outerShell = $('<div>', {
        "class": 'outer-shell',
    });


    var innerShell = $('<div>', {
        "class": 'inner-shell',
    });

    var clockScreen = $('<div>', {
        "class": 'clock-screen',

    });

    var pm = $('<div>', {
        "class": 'left-labels',
        "text": 'PM',

    });
    var auto = $('<div>', {
        "class": 'left-labels',
        "text": 'Auto',


    });
    var amFreq = $('<div>', {
        "class": 'bottom-text',
        "html": 'AM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;53  60  70  90 110 140 170&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KHz',

    });

    var fmFreq = $('<div>', {
        "class": 'bottom-text',
        "html": 'FM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88  92  96   102 106 108&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MHz',

    });

    var clockText = $('<div>', {
        "class": 'clock-text',
        "id": 'clock-time',
        "text": '00:00'
    })
    var clockPM = $('<div>', {
        "class": 'pm-auto',
    })
    var clockAuto = $('<div>', {
        "class": 'pm-auto',
    })

    // setup clock screen
    clockScreen.append(clockPM, clockAuto, clockText)

    // setup outside clock screen
    innerShell.append(pm, auto, clockScreen, amFreq, fmFreq)

    // setup clock shell
    outerShell.append(innerShell)

    // draw clock 
    $('.clock-container').append(outerShell);

    var setDisplayTime = function(newTime) {
        var clockVisualText = newTime.getHours() + ":" + ((newTime.getMinutes() < 10) ? "0" + newTime.getMinutes() : newTime.getMinutes())
        console.log(clockVisualText, newTime.getSeconds());
        $('#clock-time').text(clockVisualText);
        $('#clock-time').fadeToggle(900);
    }

    // set initial time
    setDisplayTime(new Date);

    var timeSetter = setInterval(function() {
        setDisplayTime(new Date)
    }, 900);

});