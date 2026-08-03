// ======================================================
// GOOGLE FORM MAINTENANCE
// ======================================================

const JOB_FORM_ID = "1zC71ZAtuppjoRxA0DuvQxn-h8BiCG7ZItXEJzgpzaPo";

function updateJobForm() {

  const form = FormApp.openById(JOB_FORM_ID);

  const items = form.getItems();

  const accountItem = items.find(i => i.getTitle() === "Account").asListItem();
  const clientItem = items.find(i => i.getTitle() === "Client").asListItem();
  const serviceItem = items.find(i => i.getTitle() === "Service").asListItem();
  const paymentItem = items.find(i => i.getTitle() === "Payment Method").asListItem();

  // Accounts

  const accounts = getAccounts().map(a => a[1]);
  accountItem.setChoiceValues(accounts);

  // Clients

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const clientSheet = ss.getSheetByName("Clients");

  const clientData = clientSheet
    .getRange(2, 3, clientSheet.getLastRow() - 1, 1)
    .getValues()
    .flat();

  clientItem.setChoiceValues(clientData);

  // Services

  const services = getServices().map(s => s[1]);
  serviceItem.setChoiceValues(services);

  // Payment Methods

  paymentItem.setChoiceValues(getPaymentMethods());

  SpreadsheetApp.getUi().alert("Google Form updated successfully.");

}
