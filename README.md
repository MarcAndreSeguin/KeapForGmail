# Keap CRM Viewer for Gmail
#### Video Demo:  <URL HERE>
#### Description:

A Chrome extension that allows Gmail users to quickly view Keap CRM customer profiles if the customer exists in the database. It requires a valid Gmail account and a linked Keap account with an API key. This mimics the behavior of the Hubspot Sales Extension, where an icon appears on the Gmail sidebar and allows a miniature version of the customer profile and properties to be displayed and edited on the fly.

More formally, the goal is to create a simple, clickable Chrome extension (accessible from the puzzle piece icon) that conditionally displays Keap contact data only when replying to an email in Gmail.

Core Behavior
When outside of Gmail, the popup shows a friendly message such as “No contact found.”

When inside Gmail (specifically in the reply view), the extension displays the basic contact profile pulled from the Keap API, provided the sender's email exists in Keap.

Currently displayed fields from Keap include Full Name, Email Address, and Phone Number. Future development may include displaying all available contact properties.

The design style closely mimics Keap's UI for consistency, including colors, fonts, and spacing.

The extension is not injected into Gmail’s DOM directly in v1—there is no sidebar yet. Instead, data is pulled from Keap’s API and displayed within the popup window only.


### 2025-08-04

Implemented MutationObserver logic in content.js to monitor changes to Gmail’s recipient field, ensuring the extension consistently updates the displayed Keap contact information as needed.

### 2025-08-03

Completed the logic in popup.js to make an API call to Keap, fetching and displaying the relevant contact information when the popup is activated.

### 2025-08-02

Styled the extension popup using a dedicated CSS file (styles.css), ensuring visual consistency with the existing Keap user interface.

### 2025-08-01

Built initial JavaScript scaffolding in popup.js to handle popup interactions and basic UI logic.

### 2025-06-06

Determined the minimum viable product (v1) scope of the Chrome extension, and summarized functionality at the top of the README file. Set up initial popup.html and popup.js with a basic "Hello, World" style interface.

### 2025-06-05

Determined the necessary files for the extension, including manifest.json, background.js, content.js, popup.html, popup.js, and an optional styles.css file.

Created manifest.json from official Chrome documentation. The final version of this file was generated with assistance from ChatGPT.

Initialized GitHub repository at https://github.com/MarcAndreSeguin/KeapForGmail.

Learned basic git commands ("git add .", "git commit -m 'Message'", "git push origin main") and tested files locally using git pull.