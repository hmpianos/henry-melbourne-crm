// ======================================================
// GOOGLE FORM MAINTENANCE
// ======================================================

const JOB_FORM_ID = "1zC71ZAtuppjoRxA0DuvQxn-h8BiCG7ZItXEJzgpzaPo";

function updateJobForm() {

  const form = FormApp.openById(JOB_FORM_ID);

  getFormListItem(form, "Account")
    .setChoiceValues(getAccounts().map(a => a[1]));

  getFormListItem(form, "Client")
    .setChoiceValues(
      SpreadsheetApp.getActiveSpreadsheet()
        .getSheetByName("Clients")
        .getRange(2, 3,
          SpreadsheetApp.getActiveSpreadsheet()
            .getSheetByName("Clients")
            .getLastRow() - 1, 1)
        .getValues()
        .flat()
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
