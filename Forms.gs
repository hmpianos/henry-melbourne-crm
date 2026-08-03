// ======================================================
// GOOGLE FORM
// ======================================================

function onFormSubmit(e) {

  const r = e.namedValues;

  const serviceID = getServiceIDByName(r["Service"][0]);

  let rate = r["Rate"][0];

  if (rate === "") {

    rate = getDefaultRate(serviceID);

  }

  const job = {

    date: r["Job Date"][0],
    accountID: getAccountIDByName(r["Account"][0]),
    clientID: getClientIDByName(r["Client"][0]),
    contactVenue: r["Contact / Venue"][0],
    room: r["Room"][0],
    piano: r["Piano"][0],
    service: serviceID,
    rate: rate,
    paymentMethod: r["Payment Method"][0],
    notes: r["Job Notes"][0]

  };

  createJob(job);

}
