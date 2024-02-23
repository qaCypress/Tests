const fs = require('fs');
const path = require('path');

const reportsDirectory = 'cypress/reports'; // Replace with the path to your report directory

// Function to get the latest report file
async function getLatestReport() {
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
async function openLatestReport() {
  try {
    const latestReportFile = await getLatestReport();
    const { default: opn } = await import('open');
    await opn(latestReportFile);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

openLatestReport();
