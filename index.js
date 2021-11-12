const {path} = require('@vuepress/utils');
const customLinks = require('./plugins/plugin-custom-links.js');

module.exports = (options, app) => {
  // Define default options
  const defaultOptions = {
    // @TODO: for netlify concerns
    // modifies header/footer links, external links in markdown files
    // and search URLs
    // baseUrl: https://docs.lando.dev

    // Creates a contributors page and adds it to the sidebar
    // @NOTE: only works with github repos
    // @NOTE: you need to set docRepo or repo and also contributors
    contributors: true,
    contributorsText: 'Contributors',
    contributorsPage: true,

    // Dark mode
    darkMode: true,

    // Edit link text
    editLinkText: 'Suggest an edit to this page',

    // Last updated
    lastUpdated: true,
    lastUpdatedText: 'Updated',

    // Shows the CarbonAds in the top sidebar
    showCarbonAds: true,

    // Shows the special sponsors on the right, see sponsors below
    // Can be true|false|or a list of sponsor ids to show
    showSponsors: false,
    sponsors: [],

    // @TODO: this requires a valid repo be set and that its a github repo
    showSearch: false,
    searchSettings: {
      apiKey: '15e332850128e9ec96929f44c62f6c88',
      indexName: 'lando',
    },


  };

  // Merge together
  options = {...defaultOptions, ...options};
  console.log(options);

  // Plugins that we need no matter what
  const plugins = [
    // Use sass palette stuff
    ['@vuepress/plugin-palette',
      {
        preset: 'sass',
      },
    ],
    // Load in gloal components
    ['@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, 'global'),
        componentsPatterns: ['*.vue', '**/*.vue'],
      },
    ],
    // Just pass in ALL THE THEME DATA for now
    ['@vuepress/plugin-theme-data',
      {
        themeData: {...defaultOptions, ...options},
      },
    ],
  ];

  // Add in search if applicable
  if (options.showSearch) plugins.push(['@vuepress/docsearch', options.searchSettings]);

  return {
    name: '@lando/vuepress-theme-lando-docs',
    extends: '@vuepress/theme-default',
    layouts: path.resolve(__dirname, 'layouts'),
    clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js'),
    plugins,
    extendsMarkdown: md => {
      md.use(customLinks);
    },
  };
};
