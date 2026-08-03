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

  return [
    {
      jobID: "TEST001",
      date: "03/08/26",
      account: "Test Account",
      client: "Test Client",
      service: "FINE",
      rate: 95
    }
  ];

}
