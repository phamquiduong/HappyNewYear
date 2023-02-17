var timeout = null;
const second_of_day = 24 * 60 * 60;
const second_of_hour = 60 * 60;
const second_of_minute = 60;
const NEW_YEAR_DATE = [
    new Date(2023, 0, 22, 0, 0, 0, 0),
    new Date(2024, 1, 10, 0, 0, 0, 0),
    new Date(2025, 0, 29, 0, 0, 0, 0),
    new Date(2026, 1, 17, 0, 0, 0, 0),
];

function init() {
    const NOW = Date.now();

    for (new_year of NEW_YEAR_DATE)
        if (new_year > NOW)
            break;

    document.getElementById('year').innerHTML = new_year.getYear() + 1900;

    loop(Math.floor(Math.abs(new_year - NOW) / 1000));
}


function loop(count) {
    temp = count;

    day = Math.floor(temp / second_of_day);
    temp = temp % second_of_day;

    hour = Math.floor(temp / second_of_hour);
    temp = temp % second_of_hour;

    minute = Math.floor(temp / second_of_minute);
    temp = temp % second_of_minute;

    second = Math.floor(temp);

    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;

    timeout = setTimeout(function () {
        count -= 1;
        loop(count);
    }, 1000);
}
