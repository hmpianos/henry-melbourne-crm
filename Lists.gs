// ======================================================
// LOOKUP DATA
// ======================================================

function getPaymentMethods() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Lists");

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return [];

  return sheet
    .getRange(2, 2, lastRow - 1, 1)
    .getValues()
    .flat()
    .filter(String);

}

function getServices() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Services");

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return [];

  return sheet
    .getRange(2, 1, lastRow - 1, 3)
    .getValues();

}
