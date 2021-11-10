const {path} = require('@vuepress/utils');

module.exports = (options, app) => {
  // Define default options
  const defaultOptions = {
    // @TODO: for netlify concerns
    // modifies header/footer links, external links in markdown files
    // and search URLs
    // baseUrl: https://docs.lando.dev
    // Shows the CarbonAds in the top sidebar
    showCarbonAds: false,
    // Shows the special sponsors on the right
    // Can be true|false|or a list of sponsors to show
    showSponsors: false,
    // @TODO: this requires a valid repo be set and that its a github repo
    showOtherVersions: true,
    showContributors: true,
    showGeneratedFrom: true,
    // Metadata for our sponsors
    sponsors: [],
  };

  // Merge together
  options = {...defaultOptions, ...options};
  console.log(options);

  return {
    name: '@lando/vuepress-docs-theme',
    extends: '@vuepress/theme-default',
    layouts: path.resolve(__dirname, 'layouts'),
    plugins: [
      [
        '@vuepress/docsearch',
        {
          apiKey: '15e332850128e9ec96929f44c62f6c88',
          indexName: 'lando',
        },
      ],
      [
        '@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, 'components/global'),
          componentsPatterns: ['*.vue', '**/*.vue'],
        },
      ],
      [
        '@vuepress/plugin-palette',
        {
          preset: 'sass',
        },
      ],
    ],
  };
};
