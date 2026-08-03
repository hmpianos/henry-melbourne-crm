// ======================================================
// GOOGLE FORM
// ======================================================

function onFormSubmit(e) {

  const r = e.namedValues;

  const job = {

    date: r["Job Date"][0],
    accountID: r["Account"][0],
    clientID: r["Client"][0],
    contactVenue: r["Contact / Venue"][0],
    room: r["Room"][0],
    piano: r["Piano"][0],
    service: r["Service"][0],
    rate: r["Rate"][0],
    paymentMethod: r["Payment Method"][0],
    notes: r["Job Notes"][0]

  };

  // If Rate left blank, use the default from Services sheet

  if (job.rate === "") {

    job.rate = getDefaultRate(job.service);

  }

  createJob(job);

}


// ======================================================
// SERVICES
// ======================================================

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

  return "";

}
