const opn = require('opn');
const fs = require('fs');
const path = require('path');

const NameProjects = [
  "AllRightDesk", "AllRightMob", "LuckyBirdDesk", "LuckyBirdMob",
  "SlotticaDesk", "SlotticaMob", "SlottyWayDesk", "SlottyWayMob",
  "SpinambaDesk", "SpinambaMob", "SpinBountyDesk", "SpinBountyMob",
  "SuperCatDesk", "SuperCatMob", "Magic365Desk", "Magic365Mob",
  "ViksDesk", "ViksMob", "SpinadoDesk", "SpinadoMob"
];

const arrPlatformk = ["Desk", "Mob"];
const htmlFilePaths = [];

arrPlatformk.forEach(element => {
  NameProjects.forEach(project => {
    const folderPath = `cypress/screenshots/FourDaily${element}.cy.js/${project}`;

    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

      if (imageFiles.length > 0) {
        const absoluteFolderPath = path.resolve(folderPath);
        const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Screenshots for ${project}</title>
          </head>
          <body>
            <h1>Screenshots for ${project}</h1>
            <div id="screenshots">
              ${imageFiles.map(file => `<img src="file://${path.join(absoluteFolderPath, file)}" alt="${file}">`).join('\n')}
            </div>
          </body>
          </html>
        `;
        
        const htmlFilePath = path.join(absoluteFolderPath, 'screenshots.html');
        fs.writeFileSync(htmlFilePath, htmlContent);
        htmlFilePaths.push(htmlFilePath);
      }
    }
  });
});

if (htmlFilePaths.length > 0) {
  opn(htmlFilePaths, { app: ['google chrome', '--new-window'] })
    .then(() => console.log("All HTML files opened in Google Chrome."))
    .catch(error => console.error("Error opening HTML files:", error));
} else {
  console.log("No HTML files found.");
}