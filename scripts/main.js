//Start clock

function initClock() {
    var clock = document.getElementById('clock');
    var time = getCurrentTime(new Date());


//display time
    clock.innerHTML = time['hours'] + ':' + time['minutes'] + ':' + time['seconds'];
}

function getCurrentTime() {
    var date = new Date();
    var time = new Array;

    time['seconds'] = date.getSeconds();
    time['minutes'] = date.getMinutes();
    time['hours'] = date.getHours();

    if (time['hours'] < 10) {
        time['hours'] = '0' + time['hours'];
    }

    if (time['minutes'] < 10) {
        time['minutes'] = '0' + time['minutes'];
    }

    if (time['seconds'] < 10) {
        time['seconds'] = '0' + time['seconds'];
    }

    return time;
}

initClock();

setInterval(initClock, 1000);
