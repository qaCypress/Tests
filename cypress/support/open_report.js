const fs = require('fs');
const path = require('path');
const opn = require('open');

const reportsDirectory = 'cypress/reports'; // Replace with the path to your report directory

// Function to get the latest report file
function getLatestReport() {
  const files = fs.readdirSync(reportsDirectory);
  const htmlReports = files.filter((file) => file.endsWith('.html'));

  if (htmlReports.length === 0) {
    console.error('No HTML reports found.');
    process.exit(1);
  }

  const latestReport = htmlReports.reduce((latest, report) => {
    const reportPath = path.join(reportsDirectory, report);
    const stat = fs.statSync(reportPath);
    if (!latest || stat.mtime > latest.mtime) {
      return { file: reportPath, mtime: stat.mtime };
    }
    return latest;
  }, null);

  return latestReport.file;
}

// Get the latest report and open it in the default browser
const latestReportFile = getLatestReport();
opn(latestReportFile);