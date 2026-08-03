// ======================================================
// DASHBOARD
// ======================================================

function showDashboard() {

  const html = HtmlService
    .createHtmlOutputFromFile("DashboardView")
    .setWidth(1000)
    .setHeight(700);

  SpreadsheetApp.getUi()
    .showModalDialog(html, "HM CRM Dashboard");

}


function getUnprocessedJobs() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Master Log");

  const data = sheet.getDataRange().getValues();

  const jobs = [];

  for (let i = 1; i < data.length; i++) {

    if (data[i][12] === "Unprocessed") {

      jobs.push({

        jobID: data[i][1],
        date: data[i][2],
        account: data[i][3],
        client: data[i][4],
        service: data[i][8],
        rate: data[i][9]

      });

    }

  }

  return jobs;

}
