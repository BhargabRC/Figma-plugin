// Import the Figma API
const { ui } = require('figma-plugin-ds');

// This function is called when the UI is loaded
ui.onready(() => {
  // Add a click event listener to the Export button
  const exportButton = document.getElementById('export-button');
  exportButton.addEventListener('click', () => {
    // Tell the Figma plugin to run
    parent.postMessage({ pluginMessage: { type: 'export-frame' } }, '*');
  });
});
