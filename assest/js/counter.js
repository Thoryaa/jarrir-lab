let countdown = () => {
    const upperTime = new Date('Feb 1,2022 12:10:10').getTime();
    const currentTime = new Date().getTime();
    const diftime = upperTime - currentTime;
    const second = 1000;
    const minutes = 60000;
    const hours = minutes * 60;
    const days = hours * 24;
    const remainday = Math.floor(diftime / days);
    const remainhour = Math.floor((diftime % days) / hours);
    const remainsecond = Math.floor((diftime % hours) / minutes);
    const remainminute = Math.floor((diftime % minutes) / second);
    document.getElementById('days').innerHTML = remainday;
    document.getElementById('hours').innerHTML = remainhour;
    document.getElementById('seconds').innerHTML = remainminute;
    document.getElementById('minutes').innerHTML = remainsecond;
    document.getElementById('days1').innerHTML = remainday;
    document.getElementById('hours1').innerHTML = remainhour;
    document.getElementById('seconds1').innerHTML = remainminute;
    document.getElementById('minutes1').innerHTML = remainsecond;
    document.getElementById('days2').innerHTML = remainday;
    document.getElementById('hours2').innerHTML = remainhour;
    document.getElementById('seconds2').innerHTML = remainminute;
    document.getElementById('minutes2').innerHTML = remainsecond;
    document.getElementById('days3').innerHTML = remainday;
    document.getElementById('hours3').innerHTML = remainhour;
    document.getElementById('seconds3').innerHTML = remainminute;
    document.getElementById('minutes3').innerHTML = remainsecond;
    document.getElementById('days4').innerHTML = remainday;
    document.getElementById('hours4').innerHTML = remainhour;
    document.getElementById('seconds4').innerHTML = remainminute;
    document.getElementById('minutes4').innerHTML = remainsecond;
}
setInterval(countdown, 1000);
if ((remainday == 0) && (remainhour == 0) && (remainminute == 0) && (remainsecond == 0)) {
    document.getElementById('s1').style.display = 'none';
}