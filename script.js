// document.getElementById("dayOfTheWeek").innerHTML = "Hello World!";

// const currentDate = new Date();

// // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// const currentDayOfWeek = currentDate.getDay();

// // Get the current time in milliseconds since January 1, 1970 (UNIX timestamp)
// const currentTimeMilliseconds = currentDate.getTime();

// // Array to map day of the week index to its name
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // Display the current day of the week and current time in milliseconds
// console.log("Current Day of the Week: " + daysOfWeek[currentDayOfWeek]);
// console.log("Current Time in Milliseconds: " + currentTimeMilliseconds);


// Function to update the current day of the week and time in UTC milliseconds
function updateDayAndTime() {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTimeMilliseconds = currentDate.getTime();
    const currentUTCTimeMilliseconds = currentDate.getTime() - (currentDate.getTimezoneOffset() * 60 * 1000);

    document.getElementById('dayOfWeek').textContent = currentDayOfWeek;
    // document.getElementById('currentTimeMilliseconds').textContent = currentTimeMilliseconds;
    document.getElementById('currentUTCTimeMilliseconds').textContent = currentUTCTimeMilliseconds;
}

// Call the updateDayAndTime function to initially populate the values
updateDayAndTime();

// Update the values every second (1000 milliseconds)
setInterval(updateDayAndTime, 1000);