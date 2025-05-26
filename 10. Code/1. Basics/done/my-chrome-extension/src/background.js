/*Service Worker for Google Chrome Extension 
Handles when extension is installed
Handles when message is received*/

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getData') {
        // Handle the data request
        console.log('Data requested');
        sendResponse({ data: 'Sample Data' });
    }
});

/*Service Worker for Google Chrome Extension
Handles when extension is installed
Handles when message is received*/