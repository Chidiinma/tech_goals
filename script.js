


// Get current UTC time and adjust to UTC+1
const utcOffset = 1 * 60 * 60 * 1000;  // UTC+1 in milliseconds
const currentUTCTime = new Date(Date.now() + utcOffset).toUTCString();
document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time in UTC+1: ${currentUTCTime}`;

// Get current day of the week in UTC
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getUTCDay();  // Day index in UTC
const currentDay = days[currentDayIndex];
document.querySelector('[data-testid="currentDay"]').textContent = `Current Day of the Week (UTC): ${currentDay}`;







