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

  const accountMap = getAccountMap();
  const clientMap = getClientMap();
  const serviceMap = getServiceMap();

  const jobs = [];

  for (let i = 1; i < data.length; i++) {

    if (data[i][12] !== "Unprocessed") continue;

    jobs.push({

      jobID: data[i][1],

      date: Utilities.formatDate(
        data[i][2],
        Session.getScriptTimeZone(),
        "dd/MM/yy"
      ),

      account: accountMap[data[i][3]] || data[i][3],
      client: clientMap[data[i][4]] || data[i][4],
      service: serviceMap[data[i][8]] || data[i][8],
      rate: data[i][9]

    });

  }

  return jobs;

}
