// ======================================================
// PLACEHOLDER FUNCTIONS
// ======================================================

function showNewJobSidebar() {

  const html = HtmlService
    .createHtmlOutputFromFile("NewJob")
    .setTitle("New Job");

  SpreadsheetApp
    .getUi()
    .showSidebar(html);

}
function searchJobs() {}
function processJobs() {}

function showNewClientSidebar() {

  const html = HtmlService
      .createHtmlOutputFromFile("NewClient")
      .setTitle("New Client");

  SpreadsheetApp
      .getUi()
      .showSidebar(html);

}
function searchClients() {}

function showNewAccountSidebar() {}
function searchAccounts() {}

function generateBilling() {}

function showDashboard() {}

function testMessage() {

  SpreadsheetApp
    .getUi()
    .alert("Apps Script received the request!");

}
