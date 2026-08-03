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


// ======================================================
// CREATE CLIENT
// ======================================================

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


// ======================================================
// GET CLIENTS
// ======================================================

function getClients(accountID) {

  return getAllClients()
    .filter(client => client[1] === accountID)
    .map(client => [client[0], client[2]]);

}


function getAllClients() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Clients");

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) return [];

  return sheet
    .getRange(2, 1, lastRow - 1, 7)
    .getValues();

}


// ======================================================
// CLIENT LOOKUPS
// ======================================================

function getClientMap() {

  const map = {};

  getAllClients().forEach(function(client) {

    map[client[0]] = client[2];

  });

  return map;

}


function getClientIDByName(clientName) {

  const clients = getAllClients();

  for (let i = 0; i < clients.length; i++) {

    if (clients[i][2] === clientName) {

      return clients[i][0];

    }

  }

  throw new Error("Client not found: " + clientName);

}


function getClientNameByID(clientID) {

  return getClientMap()[clientID] || clientID;

}
