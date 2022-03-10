'use strict';

const {chalk, warn} = require('@vuepress/utils');
const customLinks = require('./custom-links.js');
const {makeFauxInternal} = require('./utils');

const name = '@lando/plugin-faux-internal';

module.exports = (options = {}, app) => {
  if (!options.baseUrl) {
    warn(`plugin ${chalk.magenta(name)} has no baseUrl set, plugin not loaded`);
    return {};
  }

  // If baseUrl and base are both set and home is not then lets set a better default
  if (app.options.base && !options.home) {
    options.home = options.baseUrl;
  }

  // Make sure if navbar has any "faux internal links" that they are set as suck
  options.navbar = makeFauxInternal(options.navbar, options.baseUrl);

  return {
    name,
    // Replace the core linksPlugin
    extendsMarkdown: md => {
      md.use(customLinks, options);
    },
  };
};
