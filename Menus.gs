// ======================================================
// CRM MENU
// ======================================================

function onOpen() {

  SpreadsheetApp.getUi()
    .createMenu("CRM")

    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Jobs")
        .addItem("New Job", "showNewJobSidebar")
        .addItem("Search Jobs", "searchJobs")
        .addItem("Process Jobs", "processJobs")
    )

    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Clients")
        .addItem("New Client", "showNewClientSidebar")
        .addItem("Search Clients", "searchClients")
    )

    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Accounts")
        .addItem("New Account", "showNewAccountSidebar")
        .addItem("Search Accounts", "searchAccounts")
    )

    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Billing")
        .addItem("Generate Billing Description", "generateBilling")
    )

    .addSubMenu(
      SpreadsheetApp.getUi()
        .createMenu("Reports")
        .addItem("Dashboard", "showDashboard")
    )

    .addToUi();

}
