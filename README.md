# Keap CRM Viewer for Gmail
#### Video Demo:  <URL HERE>
#### Description: A Chrome extension that allows Gmail users to quickly view Keap CRM customer profiles (if customer exist in database). Requires a valid gmail account and a linked Keap account (API key)



### 2025-06-05
Determined list of necessary files from ChaptGPT:
    manifest.json: The config file that tells Chrome how your extension behaves.
    background.js: Runs in the background; can handle persistent actions, auth, or messaging.
    content.js: Injected into Gmail/Keap pages to read or manipulate DOM.
    popup.html: The popup UI (when you click the extension icon).
    popup.js: The logic for the popup UI.
    styles.css: Optional styling for your popup.


Created manifest.json from Chrome documentation
https://developer.chrome.com/docs/extensions/reference/manifest#minimal-manifest
ChatGPT crafted final code
