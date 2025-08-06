document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = "<p>KFG - Loading ...</p>";

  console.log("KFG - Running popup.js...");

  chrome.storage.local.get("keapRecipient", (result) => {
    const email = result.keapRecipient;

    if (!email) {
      app.innerHTML = `
        <div class="keap-name">No contact found.</div>
        <a class="keap-button" href="https://keap.app/contacts/list/all" target="_blank">All contacts in Keap</a>
      `;
      return;
    }

    const apiUrl = `https://api.infusionsoft.com/crm/rest/v1/contacts?email=${encodeURIComponent(email)}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${KEAP_PAT}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Fetch status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Keap API response:", data);
        if (data.contacts && data.contacts.length > 0) {
          const contact = data.contacts[0];
          const profileUrl = `https://keap.app/contacts/list/contact/${contact.id}/details`;

          app.innerHTML = `
            <div class="keap-card">
              <div class="keap-initials">
                ${contact.given_name[0] ?? ""}${contact.family_name[0] ?? ""}
              </div>
              <div class="keap-name">
                ${contact.given_name} ${contact.family_name}
              </div>
              <div class="keap-phone">
                ${contact.phone_numbers?.[0]?.number || "N/A"}
              </div>
              <div class="keap-email">
                ${contact.email_addresses?.[0]?.email || "N/A"}
              </div>
              <a class="keap-button" href="${profileUrl}" target="_blank">View in Keap</a>
            </div>
          `;
        } else {
          app.innerHTML = `
            <div class="keap-name">No contact found.</div>
            <a class="keap-button" href="https://keap.app/contacts/list/all" target="_blank">All contacts in Keap</a>
          `;
        }
      })
      .catch((error) => {
        console.error("Error fetching from Keap:", error);
        app.innerHTML = `<div class="keap-name">API error. Try again later.</div>`;
      });
  });
});
