const path = require('path');
const fs = require('fs');
const timesnap = require('timesnap');

(async () => {
  let outputDir = `render`;

  await timesnap({
    url: `http://localhost:8080/screensaver`,
    viewport: {
      width: 1920,
      height: 1080
    },
    fps: 30,
    // frames: 360,
    duration: 60,
    outputDirectory: outputDir,
  }).then(function () {
    console.log(`Rendered`);
  })
})();