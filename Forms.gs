// ======================================================
// GOOGLE FORM
// ======================================================

function onFormSubmit(e) {

  const r = e.namedValues;

  const job = {

    date: r["Job Date"][0],
    accountID: r["Account ID"][0],
    clientID: r["Client ID"][0],
    contactVenue: r["Contact / Venue"][0],
    room: r["Room"][0],
    piano: r["Piano"][0],
    service: r["Service"][0],
    rate: r["Rate"][0],
    paymentMethod: r["Payment Method"][0],
    notes: r["Job Notes"][0]

  };

  createJob(job);

}
