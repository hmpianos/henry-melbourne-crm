// ======================================================
// ACCOUNTS
// ======================================================

function getAccounts() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Accounts");

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return [];

  return sheet
    .getRange(2, 1, lastRow - 1, 2)
    .getValues();

}


// ======================================================
// ACCOUNT LOOKUPS
// ======================================================

function getAccountIDByName(accountName) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Accounts");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][1] === accountName) {

      return data[i][0];

    }

  }

  throw new Error("Account not found: " + accountName);

}


function getAccountNameByID(accountID) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Accounts");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === accountID) {

      return data[i][1];

    }

  }

  throw new Error("Account not found: " + accountID);

}
