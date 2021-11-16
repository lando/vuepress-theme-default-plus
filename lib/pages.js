'use strict';
const {fs, path} = require('@vuepress/utils');

exports.contributors = ({contributorsData, contributorsPage, contributorsText}) => ({
  path: contributorsPage,
  content: fs.readFileSync(path.resolve(__dirname, '..', 'pages', 'contributors.md')),
  frontmatter: {
    contributors: false,
    contributorsData: contributorsData,
    editLink: false,
    lastUpdated: false,
    title: contributorsText,
    layout: 'Layout',
  },
});
