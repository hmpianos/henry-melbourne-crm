// ======================================================
// CLIENTS
// ======================================================

function getNextClientID(accountID) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const settings = ss.getSheetByName("Settings");

  const data = settings.getDataRange().getValues();

  const settingName = "Next" + accountID + "Client";

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === settingName) {

      const nextNumber = Number(data[i][1]);

      const clientID =
        accountID +
        String(nextNumber).padStart(3, "0");

      settings.getRange(i + 1, 2).setValue(nextNumber + 1);

      return clientID;

    }

  }

  throw new Error("Counter not found for " + accountID);

}

function createClient(client) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const clients = ss.getSheetByName("Clients");

  clients.appendRow([
    getNextClientID(client.accountID),
    client.accountID,
    client.name,
    client.address,
    client.email,
    client.phone,
    ""
  ]);
}
function getClients(accountID) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName("Clients");

  const data = sheet.getDataRange().getValues();

  const clients = [];

  for (let i = 1; i < data.length; i++) {

    if (data[i][1] === accountID) {

      clients.push([
        data[i][0],
        data[i][2]
      ]);

    }

  }

  return clients;

}
