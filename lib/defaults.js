'use strict';

module.exports = {
  // Core config
  logo: 'https://vuepress-theme-lando-docs.lando.dev/images/logo-pink-small.png',

  // Allows absolute links to this domain to behave like internal links
  // This is useful for multiple sites that are served under one domain a la netlify
  baseUrl: 'https://docs.lando.dev',

  contributors: true,
  contributorsText: 'Contributorz',
  // Automatically creates a contributors page at the specified path
  contributorsPage: '/contributors.html',
  // Create a link in the sidebar at the specified path or external link
  contributorsSidebar: '/contributors.html',

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
