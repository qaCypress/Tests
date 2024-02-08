// open_Image.js

const opn = require('opn');
const fs = require('fs');
const path = require('path');

var NameProjects = [
  "AllRightDesk", "AllRightMob", "LuckyBirdDesk", "LuckyBirdMob",
  "SlotticaDesk", "SlotticaMob", "SlottyWayDesk", "SlottyWayMob",
  "SpinambaDesk", "SpinambaMob", "SpinBountyDesk", "SpinBountyMob",
  "SuperCatDesk", "SuperCatMob", "Magic365Desk", "Magic365Mob",
  "ViksDesk", "ViksMob", "SpinadoDesk", "SpinadoMob"
];

var arrPlatformk = ["Desk","Mob"];

arrPlatformk.forEach(element => {
  const projectPromises = NameProjects.map(project => {
    return new Promise((resolve, reject) => {
      const folderPath = `cypress/screenshots/FourDaily${element}.cy.js/${project}`;
  
      if (!fs.existsSync(folderPath)) {
        console.error(`Folder does not exist: ${folderPath}`);
        reject(`Folder does not exist: ${folderPath}`);
        return;
      }
  
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');
  
      if (imageFiles.length === 0) {
        console.log(`No PNG files found in the folder: ${folderPath}`);
        resolve(`No PNG files found in the folder: ${folderPath}`);
        return;
      }
  
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
  
      resolve(htmlFilePath);
    });
  });
  
  Promise.all(projectPromises)
    .then((htmlFilePaths) => {
      console.log(`HTML files generated:\n${htmlFilePaths.join('\n')}`);
  
      htmlFilePaths.forEach(htmlFilePath => {
        opn(htmlFilePath);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

