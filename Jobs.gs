// ======================================================
// JOBS
// ======================================================

function getNextJobID() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const settings = ss.getSheetByName("Settings");

  const data = settings.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    if (data[i][0] === "NextJob") {

      const nextNumber = Number(data[i][1]);

      const jobID =
        "JOB" +
        String(nextNumber).padStart(4, "0");

      settings.getRange(i + 1, 2).setValue(nextNumber + 1);

      return jobID;

    }

  }

  throw new Error("NextJob counter not found.");

}

function createJob(job) {



  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const master = ss.getSheetByName("Master Log");

  master.appendRow([

    new Date(),               // Created Timestamp
    getNextJobID(),           // Job ID
    job.date,                 // Job Date
    job.accountID,            // Account ID
    job.clientID,             // Client ID
    job.contactVenue,         // Contact / Venue
    job.room,                 // Room
    job.piano,                // Piano
    job.service,              // Service ID
    job.rate,                 // Rate
    job.paymentMethod,        // Payment Method
    job.notes,                // Job Notes
    "Unprocessed",            // Status
    "",                       // Processed Date
    "",                       // Billing Date
    ""                        // Accounting Reference

  ]);

}
