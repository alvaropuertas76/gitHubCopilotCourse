**README: Build a Chrome Extension Using GitHub Copilot Prompts**  

Follow these numbered steps to create a browser extension using GitHub Copilot by crafting effective prompts:  

---

**1. Ask GitHub Copilot for the File Structure**  
Open GitHub Copilot Chat (or use an IDE with Copilot integration). Type this prompt:  
```  
"How do I create a Chrome extension? What should the file structure look like?"  
```  
GitHub Copilot will suggest a basic structure. Use this as a reference to create your project folder with files:  
- `manifest.json`  
- `background.js`  
- `popup.html`  
- `popup.js`  
- `style.css`  

---

**2. Create `manifest.json` Using Prompts**  
In a new file named `manifest.json`, write this comment:  
```  
/*  
Manifest for Chrome extension that clears browser cache.  
Requirements:  
- Manifest version 3  
- Permissions: storage, tabs, browsingData  
- Default popup: popup.html  
*/  
```  
Let GitHub Copilot generate the JSON configuration. If results are incomplete, refine the prompt by adding specific fields like `"name"` and `"version"`. Example:  
```  
"Add name 'Clear Cache' and version '1.0'"  
```  

---

**3. Generate `background.js` Logic**  
Create `background.js` and write this comment:  
```  
/*  
Service Worker for Google Chrome Extension  
Handles when extension is installed  
Handles when message is received  
*/  
```  
Allow Copilot to suggest code. If needed, add detail:  
```  
// Console log when extension is installed  
chrome.runtime.onInstalled.addListener(function() {  
```  
Then:  
```  
// Send response when message is received  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {  
```  

---

**4. Build `popup.html` with Prompts**  
In `popup.html`, write:  
```  
<!--  
HTML for Chrome extension that clears browser cache.  
Include buttons for clearing cache by time range:  
- All History  
- Past Month  
- Past Week  
- Past Day  
- Past Hour  
- Past Minute  
Add empty paragraph with id "lastCleared"  
-->  
```  
Copilot will generate HTML elements. If links appear instead of script tags, manually add:  
```  
<script src="popup.js"></script>  
<link rel="stylesheet" href="style.css">  
```  

---

**5. Add Interactivity with `popup.js`**  
Create `popup.js` and start with this high-level comment:  
```  
/*  
Chrome Extension to clear browser cache.  
Handle button clicks to clear cache for specific time ranges.  
Display success message with timestamp in "#lastCleared".  
*/  
```  
Break tasks into smaller steps, one at a time:  

**Step 1:**  
```  
// Convert date/time to human-readable format  
function convertDate(date) {  
```  

**Step 2:**  
```  
// Update paragraph with success message and date  
function addCleared() {  
```  

**Step 3:**  
```  
// Clear all cache history on button click  
document.getElementById("allHistory").addEventListener("click", function() {  
```  

Repeat for remaining buttons (pastMonth, pastWeek, etc.), letting Copilot generate code after each comment.  

---

**6. Style with `style.css`**  
In `style.css`, write:  
```  
/*  
Style the Chrome extension's popup:  
- Width: 400px, Height: 400px  
- Accessible colors/fonts  
- Centered buttons with hover/click effects  
- Bold, legible paragraph text  
*/  
```  
Let Copilot suggest styles. If layout details are missing, clarify:  
```  
body { /* Add background color #f1f1f1 and font Arial */ }  
button:hover { /* Change background color on hover */ }  
```  

---

**7. Test the Extension**  
1. Open Chrome → `chrome://extensions/`  
2. Enable Developer Mode → Click **Load unpacked** → Select your project folder  
3. Click the extension icon in the toolbar to test functionality  
4. If features fail (e.g., buttons don’t work), return to the relevant `.js` file and refine prompts with error-handling logic  

---  
