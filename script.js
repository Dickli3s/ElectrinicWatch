function updateClock (timeZona) {
    const now = new Date();
    const hours = String(now.getUTCHours() + timeZona).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    document.getElementById('clock').textContent = `${hours}: ${minutes}: ${seconds}`;
}

const selectTimeZona = document.getElementById('timeZona');
const timeZona = parseInt(selectTimeZona.value, 10);
console.log(TimeZona)

let timeZona = 0;

setInterval(updateClock(timeZona), 1000);
selectTimeZona.addEventListener('change', updateClock)



// const difrent_time_UTC = new Date().getTimezoneOffset() / 60;
// const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const timeZona2 = new Date().DateTimeFormat().resolvedOptions().timeZone;
// document.getElementById('clock2').textContent = timeZona2;
