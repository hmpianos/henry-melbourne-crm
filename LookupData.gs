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


// ======================================================
// SERVICES
// ======================================================

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


function getServiceIDByName(serviceName) {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Services");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][1] === serviceName) {

      return data[i][0];

    }

  }

  throw new Error("Service not found: " + serviceName);

}


function getServiceNameByID(serviceID) {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Services");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === serviceID) {

      return data[i][1];

    }

  }

  throw new Error("Service not found: " + serviceID);

}


function getDefaultRate(serviceID) {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Services");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === serviceID) {

      return data[i][2];

    }

  }

  throw new Error("Service not found: " + serviceID);

}
