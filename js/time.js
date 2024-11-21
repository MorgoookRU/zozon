function currentTime()
{
    let date = new Date();
    let hour = date.getHours()
    let minuts = date.getMinutes()
    let seconds = date.getSeconds()
    document.querySelector('.time').innerText = 'УСПЕЙТЕ!!! СКИДКА ЕЩЕ: ' + hour + ':' + minuts + ':' + seconds
    //console.log(date);
        setTimeout(currentTime, 1000)
    }
    currentTime();  