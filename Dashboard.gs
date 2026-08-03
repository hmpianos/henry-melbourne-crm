function getUnprocessedJobs() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Master Log");

  const lastRow = sheet.getLastRow();

  return [{
    jobID: "Rows",
    date: lastRow,
    account: "",
    client: "",
    service: "",
    rate: ""
  }];

}
