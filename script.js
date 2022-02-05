var timeout = null;
const second_of_day = 24*60*60;
const second_of_hour = 60*60;
const second_of_minute = 60;


function init() {
    const event_time = new Date(2023, 0, 22, 0, 0, 0, 0);
    loop (Math.floor(Math.abs(event_time - Date.now())/1000));
}


function loop(count) {
    temp = count;
    
    day = Math.floor(temp/second_of_day);
    temp = temp%second_of_day;

    hour = Math.floor(temp/second_of_hour);
    temp = temp%second_of_hour;

    minute = Math.floor(temp/second_of_minute);
    temp = temp%second_of_minute;

    second = Math.floor(temp);

    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;

    if (count < 0) {
        alert('Qua năm mới rồi bạn ơi!');
        clearTimeout(timeout);
        return false;
    }

    timeout = setTimeout(function () {
        count -= 1;
        loop(count);
    }, 1000);
}
