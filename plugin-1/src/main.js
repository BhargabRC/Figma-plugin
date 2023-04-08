// Import the Figma API
const { figmaPlugin } = require('figma-plugin-ds');
const { exportAsync } = require('@figma-export/core');

// This function is called when the plugin is run
figmaPlugin((figma, ui) => {
  // Get the selected frame
  const selectedFrame = figma.currentPage.selection[0];

  // Export the frame as HTML/CSS
  exportAsync([selectedFrame], {
    format: 'html',
    css: 'separate',
    directory: 'export',
  }).then(() => {
    // Alert the user that the export is complete
    ui.message('Export complete!');
  });
});
