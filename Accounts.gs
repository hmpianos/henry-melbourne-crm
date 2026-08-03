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

function getAccountMap() {

  const map = {};

  getAccounts().forEach(function(account) {

    map[account[0]] = account[1];

  });

  return map;

}


function getAccountIDByName(accountName) {

  const accounts = getAccounts();

  for (let i = 0; i < accounts.length; i++) {

    if (accounts[i][1] === accountName) {

      return accounts[i][0];

    }

  }

  throw new Error("Account not found: " + accountName);

}


function getAccountNameByID(accountID) {

  return getAccountMap()[accountID] || accountID;

}
