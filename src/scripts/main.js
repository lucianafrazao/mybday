AOS.init();

const eventDate = new Date("Dec 22, 2024 10:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCounter = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeTillEvent = eventTimeStamp - currentTimeStamp;

    //1000 = milliseconds to seconds, 60 = seconds to minutes, 60 = minutes to hours, 24 = hours to days
    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minsInMs = 1000 * 60;

    const daysTillEvent = Math.floor(timeTillEvent / daysInMs);
    const hoursTillEvent = Math.floor((timeTillEvent % daysInMs) / hoursInMs);
    const minsTillEvent = Math.floor((timeTillEvent % hoursInMs) / minsInMs);
    const secsTillEvent = Math.floor((timeTillEvent % minsInMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysTillEvent} days ${hoursTillEvent}h ${minsTillEvent}mins ${secsTillEvent}secs`;

    if (timeTillEvent < 0) {
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = `Evento já iniciado`
    }
}, 1000)