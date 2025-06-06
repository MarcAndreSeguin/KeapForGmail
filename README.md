# Keap CRM Viewer for Gmail
#### Video Demo:  <URL HERE>
#### Description:

A Chrome extension that allows Gmail users to quickly view Keap CRM customer profiles (if customer exist in database). Requires a valid gmail account and a linked Keap account (API key) This mimmicks the behavior of the Hubspot Sales Extension in which an icon appears on the Gmail sidebar and allows a miniature version of the customer profile and properties to be displayed and edited on the fly.

More formally, the goal is:
Create a simple, clickable Chrome extension (from the puzzle piece icon) that conditionally displays Keap contact data only when replying to an email in Gmail.

Core Behavior
Outside of Gmail: The popup shows a blank or friendly message (e.g., “This extension works inside Gmail.”)

Inside Gmail (Reply view):
When the user is replying to an email and the sender's email exists in Keap, display the basic contact profile pulled from the Keap API.

Displayed Fields (from Keap): Full Name, Email Address, Phone Number, Contact Type (one of: Lead, Client, or Other)
As development progresses,we may display "all loadable properties" in the extension.

Design Style: Mimic the Keap UI style for consistency(colors, fonts, spacing — can use DevTools to inspect Keap’s CSS and reuse relevant styles or classes)

Additional Notes
The extension is not injected into Gmail’s DOM in v1 (no sidebar yet)
Data is pulled from Keap’s API (assumes OAuth is handled)
All UI appears in the popup window, not the Gmail interface directly



### 2025-06-06
Determined what v1 of chrome extension will do. Added to top of README.md file

Added scaffolding to popup.html



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

Create repository on GitHub
https://github.com/MarcAndreSeguin/KeapForGmail

Learned how to "git add .", "git commit -m "Message", and "git push origin main".
And finally how to git pull from local folder to test files in Chrome, locally

