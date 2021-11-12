const _ = require('lodash');
const {createPage} = require('@vuepress/core');
const customLinks = require('./plugins/plugin-custom-links.js');
const debug = require('debug')('@lando/docs-theme');
const {isLinkHttp} = require('@vuepress/shared');
const {logger, path} = require('@vuepress/utils');

module.exports = (options, app) => {
  // Define default options
  const defaultOptions = {
    // Core config
    logo: 'https://vuepress-theme-lando-docs.lando.dev/images/logo-pink-small.png',

    // Allows absolute links to this domain to behave like internal links
    // This is useful for multiple sites that are served under one domain a la netlify
    baseUrl: 'https://docs.lando.dev',

    contributors: true,
    contributorsText: 'Contributorz',
    // Creates a contributors page and adds it to the sidebar
    // can be true or an external link
    // @NOTE: only works with github repos
    // @NOTE: you need to set docRepo or repo and also contributors
    contributorsPage: true,

    // Dark mode
    darkMode: true,

    // Edit link text
    editLink: true,
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

  // Rebase options on defaults
  options = {...defaultOptions, ...options};

  // Get a list of pages for the top level of sidebar and normalize them for easy compare
  const topLevelPages = _(options.sidebar)
    .map(item => (_.isString(item)) ? item : item.link)
    .compact()
    .map(item => path.basename(item, '.md'))
    .map(item => path.basename(item, '.html'))
    .value();
  debug('found normalized top level pages %o', topLevelPages);

  // Get more repo info?


  // If contributorPage is true and we dont already have a contributors page then push to sidebar
  if (options.contributorsPage && !_.includes(topLevelPages, 'contributors')) {
    // If its an external link then just passthrough immediately
    if (isLinkHttp(options.contributorsPage)) {
      logger.info('programatically adding contributors page to sidebar, externally linked to %s', options.contributorsPage);
      options.sidebar.push({text: options.contributorsText, link: options.contributorsPage});
    }

    // If its a supported repo type then

    // @TODO: get repo type and external contrib list
    // throw warning if not github or type not supported?
    // logger.info('programatically adding contributors page...');
    // options.sidebar.push({text: options.contributorsText, link: '/contributors.html'});
  }

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
        themeData: options,
      },
    ],
  ];

  // Add in search if applicable
   if (options.showSearch) {
     debug('adding in search plugin...');
     plugins.push(['@vuepress/docsearch', options.searchSettings]);
   }

  return {
    name: '@lando/vuepress-theme-lando-docs',
    extends: '@vuepress/theme-default',
    layouts: path.resolve(__dirname, 'layouts'),
    plugins,

    // Add in some pages
    async onInitialized(app) {
      // Add contributor page unless user has manually created it
      const contribPagePath = '/contributors.html';
      if (options.contributorsPage && app.pages.every(page => page.path !== contribPagePath)) {
        // if the homepage does not exist
        const contributors = await createPage(app, {
          path: contribPagePath,
          // set frontmatter
          frontmatter: {
            contributors: false,
            editLink: false,
            lastUpdated: false,
            title: options.contributorsText,
            layout: 'Layout',
          },
          // set markdown content
        });
        // add it to `app.pages`
        app.pages.push(contributors);
      }
    },
    extendsMarkdown: md => {
      md.use(customLinks, options);
    },
  };
};
