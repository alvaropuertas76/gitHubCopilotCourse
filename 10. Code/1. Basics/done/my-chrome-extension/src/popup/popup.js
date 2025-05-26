/*
This program is a Chrome Extension that clears browser cache.
Handle on button click:
- button with id "allHistory" that clears all cache history
- button with id "pastMonth" that clears cache history from the past month
- button with id "pastWeek" that clears cache history from the past week
- button with id "pastDay" that clears cache history from the past day
- button with id "pastHour" that clears cache history from the past hour
- button with id "pastMinute" that clears cache history from the past minute


Create function that
- converts dates and times into human-readable format
- adds "Successfully cleared cache" with date and time in a paragraph with id "lastCleared"
*/
// Function to clear cache
function clearCache(timePeriod) {
    // Clear the cache based on the time period selected
    chrome.browsingData.remove({
        "since": timePeriod
    }, {
        "cache": true
    }, function() {
        // Update the last cleared time in the UI
        const now = new Date();
        const formattedTime = formatDateTime(now);
        document.getElementById('lastCleared').innerText = `Successfully cleared cache on ${formattedTime}`;
    });
}

// Function to format date and time in a human-readable format
function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Event listeners for button clicks
document.getElementById('allHistory').addEventListener('click', () => {
    clearCache(0);
});

document.getElementById('pastMonth').addEventListener('click', () => {
    const oneMonthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    clearCache(oneMonthAgo);
});

document.getElementById('pastWeek').addEventListener('click', () => {
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    clearCache(oneWeekAgo);
});

document.getElementById('pastDay').addEventListener('click', () => {
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    clearCache(oneDayAgo);
});

document.getElementById('pastHour').addEventListener('click', () => {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    clearCache(oneHourAgo);
});

document.getElementById('pastMinute').addEventListener('click', () => {
    const oneMinuteAgo = Date.now() - (60 * 1000);
    clearCache(oneMinuteAgo);
});