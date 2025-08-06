// // note to self: this is the selector in gmail:
// // div[role="option"][data-hovercard-id]

console.log("KFG - Content script loaded!");

// Runs once
console.log("KFG - Initial recipients:", getRecipients());

updateRecipients();

function updateRecipients() {
  const recipients = getRecipients();
  console.log("KFG - Current recipients:", recipients);
  if (recipients.length > 0) {
    chrome.storage.local.set({ keapRecipient: recipients[0] });
  } else {
    chrome.storage.local.set({ keapRecipient: null });
  }
}

// Utility function to extract recipients
// This is the recipient selector in gmail:
// div[role="option"][data-hovercard-id]
// user must ensure the "pill" is active
function getRecipients() {
  return Array.from(
    document.querySelectorAll('div[role="option"][data-hovercard-id]')
  ).map((el) => el.getAttribute("data-hovercard-id"));
}

// Track observed chip containers to prevent duplicate observers
const observedContainers = new WeakSet();

// Observer for recipient chip containers
function observeChipContainer(container) {
  if (observedContainers.has(container)) return;
  observedContainers.add(container);

  console.log("KFG - Gmail 'To' chip container found!");
  console.log("KFG - Recipient:", getRecipients());
  updateRecipients();

  const observer = new MutationObserver(() => {
    console.log("KFG - Recipient field changed.");
    updateRecipients();
  });

  observer.observe(container, {
    childList: true,
    subtree: true,
  });

  console.log("KFG - MutationObserver is now watching recipient field.");
}

// Master observer for new compose/reply boxes
const rootObserver = new MutationObserver(() => {
  const containers = document.querySelectorAll('div.afx[role="listbox"]');
  containers.forEach(observeChipContainer);
});

// Start observing the whole document body for new compose windows
rootObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
