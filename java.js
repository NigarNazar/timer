const session = document.getElementById('session')
const hours =document.getElementById('hours')
const minutes =document.getElementById('minutes')
const seconds =document.getElementById('second')
function timerOut(){
    const dateTime = new Date();
    const hrs = dateTime.getHours()
    const min = dateTime.getMinutes()
    const sec = dateTime.getSeconds()


if(hrs >= 12){
    session.innerHTML = 'PM'
}
else{
    session.innerHTML = 'AM'
}


    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}
setInterval(timerOut,10)