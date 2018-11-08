import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: 'Discover Mike Oldfield',
  downPanelInRight: false
});

// Stories loader
const req = require.context("../src/components/", true, /.stories.[jt]s?$/);
function loadStories() {
  req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);