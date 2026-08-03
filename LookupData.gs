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


function getServiceMap() {

  const map = {};

  getServices().forEach(function(service) {

    map[service[0]] = service[1];

  });

  return map;

}


function getServiceIDByName(serviceName) {

  const services = getServices();

  for (let i = 0; i < services.length; i++) {

    if (services[i][1] === serviceName) {

      return services[i][0];

    }

  }

  throw new Error("Service not found: " + serviceName);

}


function getServiceNameByID(serviceID) {

  return getServiceMap()[serviceID] || serviceID;

}


function getDefaultRate(serviceID) {

  const services = getServices();

  for (let i = 0; i < services.length; i++) {

    if (services[i][0] === serviceID) {

      return services[i][2];

    }

  }

  throw new Error("Service not found: " + serviceID);

}
