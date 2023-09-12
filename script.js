// Function to update the current day of the week and UTC time in milliseconds
function updateDayAndTime() {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentUTCTimeMilliseconds = currentDate.getTime() - (currentDate.getTimezoneOffset() * 60 * 1000);

    document.getElementById('dayOfWeek').textContent = currentDayOfWeek;
    document.getElementById('currentUTCTimeMilliseconds').textContent = currentUTCTimeMilliseconds;
}

updateDayAndTime();

// Update the values every second (1000 milliseconds)
setInterval(updateDayAndTime, 1000);