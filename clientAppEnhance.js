const {defineClientAppEnhance} = require('@vuepress/client');

module.exports = defineClientAppEnhance(({app, router, siteData}) => {
  console.log(app);
  console.log(router);
  console.log(siteData.value);
});
