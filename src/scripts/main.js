AOS.init();

// Redirect for RSVP button
document.getElementById("rsvpButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "rsvp-form.html"; // Redirect to the form page
});

// Countdown timer logic
const eventDate = new Date("Jan 04, 2025 18:00:00");
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

    document.getElementById('counter').innerHTML = `${daysTillEvent}d ${hoursTillEvent}h ${minsTillEvent}m ${secsTillEvent}s`;

    if (timeTillEvent < 0) {
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = `Ihhh chegou tarde, agora já foi!`
    }
}, 1000)