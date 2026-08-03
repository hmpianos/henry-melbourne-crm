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


// ======================================================
// CREATE JOB
// ======================================================

function createJob(job) {

  const jobID = getNextJobID();

  writeJob(jobID, job);

}


// ======================================================
// WRITE JOB
// ======================================================

function writeJob(jobID, job) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const master = ss.getSheetByName("Master Log");

  master.appendRow([

    new Date(),             // Created Timestamp
    jobID,                  // Job ID
    job.date,
    job.accountID,
    job.clientID,
    job.contactVenue,
    job.room,
    job.piano,
    job.service,
    job.rate,
    job.paymentMethod,
    job.notes,
    "Unprocessed",
    "",
    "",
    ""

  ]);

  const lastRow = master.getLastRow();

  master
    .getRange(lastRow, 11)
    .setNumberFormat("£#,##0.00");

}
