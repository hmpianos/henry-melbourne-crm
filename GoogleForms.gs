// ======================================================
// GOOGLE FORM MAINTENANCE
// ======================================================

const JOB_FORM_ID = "1zC71ZAtuppjoRxA0DuvQxn-h8BiCG7ZItXEJzgpzaPo";

function updateJobForm() {

  const form = FormApp.openById(JOB_FORM_ID);

  getFormListItem(form, "Client")
  .setChoiceValues(
    getAllClients().map(client => client[2])
  );

  getFormListItem(form, "Service")
    .setChoiceValues(getServices().map(s => s[1]));

  getFormListItem(form, "Payment Method")
    .setChoiceValues(getPaymentMethods());

  SpreadsheetApp.getUi().alert("Google Form updated successfully.");

}


// ======================================================
// HELPERS
// ======================================================

function getFormListItem(form, title) {

  const item = form.getItems().find(i => i.getTitle() === title);

  if (!item) {

    throw new Error('Google Form question not found: "' + title + '"');

  }

  return item.asListItem();

}
