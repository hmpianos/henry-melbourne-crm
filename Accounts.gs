// ======================================================
// ACCOUNTS
// ======================================================

function getAccounts() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Accounts");

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return [];

  const data = sheet.getRange(2, 1, lastRow - 1, 2).getValues();

  return data;

}
